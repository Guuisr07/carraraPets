import * as React from 'react'
import { Platform, TouchableOpacity, View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import styled from 'styled-components/native'
import { useAuth } from '../../hooks/auth'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import * as Location from 'expo-location'
import { useEffect, useRef, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { credentials } from '../../utils/credentials'
import MapViewDirections from 'react-native-maps-directions'
import { images } from '../../utils/searchAssets'
import { RFValue } from 'react-native-responsive-fontsize'
import { Coordinator } from '../../navigation/coordinator/coordinator'

const StyledContainer = styled.View`
  flex: 1;
`

const MapContainer = styled(MapView)`
  flex: 0.5;
`
const RunWrapper = styled.View`
  flex: 0.5;
`
const PowerButton = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-top: 20px;
  margin-left: 16px;
`

const DistanceContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`
const TitleDistance = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
const PriceButton = styled.TouchableOpacity`
  background-color: black;
  flex-direction: row;
  padding: 8px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`
const PaymentIconButton = styled<any>(MaterialIcons)`
  font-size: 20px;
  color: white;
  margin-right: 8px;
`
const PriceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const MapScreen: React.FC<any> = ({}) => {
  const mapEl = useRef()
  const { signOut } = useAuth()
  const [origin, setOrigin] = useState()
  const [errorMsg, setErrorMsg] = useState()
  const [destination, setDestination] = useState()
  const [distance, setDistance] = useState()
  const [price, setPrice] = useState(0)

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
    })()
  }, [])

  const setRouteInDestinationLocale = (result: any) => {
    setDistance(result.distance)
    const priceValue = result.distance * 3
    setPrice(priceValue)
    mapEl?.current.fitToCoordinates(result?.coordinates, {
      edgePadding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    })
  }

  return (
    <StyledContainer>
      <MapContainer
        provider={PROVIDER_GOOGLE}
        region={origin}
        showsUserLocation
        loadingEnabled
        ref={mapEl}>
        {destination && (
          <>
            <MapViewDirections
              apikey={credentials.googleApi}
              destination={destination}
              origin={origin}
              strokeWidth={3}
              onReady={setRouteInDestinationLocale}
            />
            <Marker
              coordinate={destination}
              anchor={{ x: 0, y: 0 }}
              image={images.marker}
            />
          </>
        )}
      </MapContainer>
      <RunWrapper>
        <GooglePlacesAutocomplete
          placeholder="Search"
          query={{
            key: credentials.googleApi,
            language: 'pt-br',
          }}
          onPress={(data, details) =>
            setDestination({
              latitude: details?.geometry.location.lat,
              longitude: details?.geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              title: data?.structured_formatting.main_text,
            })
          }
          enablePoweredByContainer={false}
          fetchDetails
          styles={{
            listView: {
              backgroundColor: '#fff',
              zIndex: 10,
            },
            container: {
              position: 'absolute',
              width: '100%',
            },
          }}
        />
        {distance && (
          <DistanceContainer>
            <TitleDistance>{`Distancia: ${distance
              .toFixed(2)
              .replace('.', ',')} km`}</TitleDistance>
            <PriceButton
              onPress={() =>
                Coordinator.goToCheckoutScreen({
                  price: price.toFixed(2),
                  address: destination?.title
                })
              }>
              <PaymentIconButton name={'payment'} />
              <PriceText>{`R$: ${price
                .toFixed(2)
                .replace('.', ',')}`}</PriceText>
            </PriceButton>
          </DistanceContainer>
        )}

        {/* <TouchableOpacity onPress={() => signOut()}>
          <PowerButton name={'power'} />
        </TouchableOpacity> */}
      </RunWrapper>
    </StyledContainer>
  )
}
