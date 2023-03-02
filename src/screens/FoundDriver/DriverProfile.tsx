import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Platform, TouchableOpacity } from 'react-native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import * as Location from 'expo-location'
import { images } from '../../utils/searchAssets'
import {
  StyledContainer,
  CardRun,
  ContainerCardTitle,
  IconBack,
  TextContainer,
  CardTitle,
  FinishTemp,
  InfoDescriptionContainer,
  RunContainer,
  AnimationContainer,
  DriverImage,
  RatingAndNameContainer,
  NameProfile,
  RatingContainer,
  StarIcon,
  Rating,
  CarContainer,
  IconCar,
  DescriptionTextCar,
  TipDriver,
  IconPayment,
  TipDescription,
  FooterContainer,
  IconPhone,
  MessageWithDriver,
} from './styles'
import MapViewDirections from 'react-native-maps-directions'
import { credentials } from '../../utils/credentials'
import { LocationAccuracy, watchPositionAsync } from 'expo-location'

export const DriverProfile: React.FC<any> = ({ route }) => {
  const { destination, origin, setDestination } = route.params

  const mapEl = useRef<MapView>(null)

  const setRouteInDestinationLocale = (result: any) => {
    setTimeout(
      () =>
        mapEl?.current.fitToCoordinates(result?.coordinates, {
          edgePadding: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
          },
        }),
      100
    )
  }

  useEffect(() => {
    console.log('Driver profile', origin, destination, setDestination)
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setDestination(response)
        mapEl.current?.animateCamera({
          pitch: 50,
          center: response.coords,
        })
      }
    )
  }, [])

  return (
    <StyledContainer>
      <MapView
        style={{ flex: 1 }}
        ref={mapEl}
        provider={PROVIDER_GOOGLE}
        region={destination}
        showsUserLocation>
        {destination && (
          <>
            <MapViewDirections
              apikey={credentials.googleApi}
              destination={origin}
              origin={destination}
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
      </MapView>
      <CardRun behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ContainerCardTitle>
          <TouchableOpacity onPress={Coordinator.goToMapScreen}>
            <IconBack name={'arrow-left'} />
          </TouchableOpacity>
          <TextContainer>
            <CardTitle>{`Previsao de chegada`}</CardTitle>
            <FinishTemp>{`22:35`}</FinishTemp>
          </TextContainer>
        </ContainerCardTitle>
        <InfoDescriptionContainer>
          <RunContainer>
            <AnimationContainer
              style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}>
              <DriverImage source={images.avatarImage} />
            </AnimationContainer>

            <RatingAndNameContainer>
              <NameProfile>Guilherme Santana</NameProfile>
              <RatingContainer>
                <StarIcon name={'star'} />
                <Rating>5.0</Rating>
              </RatingContainer>
            </RatingAndNameContainer>
            <CarContainer>
              <IconCar name={'local-taxi'} />
              <DescriptionTextCar>HB20 Azul</DescriptionTextCar>
            </CarContainer>
          </RunContainer>
        </InfoDescriptionContainer>
        <TipDriver>
          <IconPayment name={'payment'} />
          <TipDescription>Gorjeta</TipDescription>
        </TipDriver>
        <FooterContainer>
          <IconPhone name={'phone'} />
          <MessageWithDriver>Entre em contato</MessageWithDriver>
        </FooterContainer>
      </CardRun>
    </StyledContainer>
  )
}
