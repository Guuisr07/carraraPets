import React, { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import * as Location from 'expo-location'
import { RFValue } from 'react-native-responsive-fontsize'
const LottieView = require('lottie-react-native')

const StyledContainer = styled.View`
  flex: 1;
`

const CardRun = styled(KeyboardAvoidingView)`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`
export const ContainerCardTitle = styled.View`
  padding-vertical: 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: #ddd;
  border-bottom-width: 1px;
  margin-bottom: 16px;
`
export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  text-align: center;
  margin-left: 48px;
`
export const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-left: 16px;
`
export const DriverImage = styled.Image`
  width: 120px;
  height: 120px;
  border-width: 2px;
  border-color: black;
  border-radius: 60px;
  border-width: 2px;
  margin-top: 16px;
`
const InfoDescriptionContainer = styled.View`
  flex: 1;
  align-items: center;
`
const AnimationContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  height: 180px;
  width: 180px;
  elevation: 5;
  margin-top: 36px;
  

`

export const DriverProfile: React.FC<any> = ({}) => {
  const [origin, setOrigin] = useState()
  const [errorMsg, setErrorMsg] = useState()

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

  return (
    <StyledContainer>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={origin}
        showsUserLocation></MapView>
      <CardRun behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ContainerCardTitle>
          <TouchableOpacity onPress={Coordinator.goToMapScreen}>
            <IconBack name={'arrow-left'} />
          </TouchableOpacity>
          <CardTitle>{`Motorista chegando...`}</CardTitle>
        </ContainerCardTitle>
        <InfoDescriptionContainer>
        <AnimationContainer
          style={{
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <LottieView
            autoPlay
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              backgroundColor: 'transparent',
            }}
            source={require('../../assets/animations/moving-car.json')}
          />
          </AnimationContainer>
        </InfoDescriptionContainer>
      </CardRun>
    </StyledContainer>
  )
}
