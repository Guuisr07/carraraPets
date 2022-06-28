import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styled from 'styled-components/native'
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import * as Location from 'expo-location'
import { RFValue } from 'react-native-responsive-fontsize'
import { images } from '../../utils/searchAssets'
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
  width: 70px;
  height: 70px;
  border-width: 2px;
  border-radius: 60px;
  border-width: 2px;
`
const InfoDescriptionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 16px;
`
const AnimationContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  elevation: 5;
  margin-top: 16px;
  
`
const FinishTemp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  text-align: center;
  margin-left: 48px;
`
const TextContainer = styled.View`
  flex-direction: column;
  align-items: center;
`
const NameProfile = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
const RatingAndNameContainer = styled.View`
  flex-direction: column;
  flex: 1;
  margin-top: 16px;
  margin-left: 16px;
`
const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: lightgray;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.text_dark};
  border-radius: 35;
  width: 70px;
  height: 25px;
  padding: 2px;
  margin-top: 8px;
`
export const StarIcon = styled<any>(FontAwesome)`
  font-size: 12px;
  color: black;
`
const Rating = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
`
export const CarImage = styled.Image`
  width: 70px;
  height: 70px;
`
const RunContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 16px;
`
const IconCar = styled<any>(MaterialIcons)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 16px;
  margin-right:  16px;
  margin-bottom: 2px;
`
const CarContainer = styled.View`
  flex: 1;
  
  align-items: flex-end;
`
const DescriptionTextCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
  
`
const FooterContainer = styled.View`
  flex: 0.6;
  border-width: 1px;
  flex-direction: row;
  border-color: lightgray;
  justify-content: center;
  align-items: center;
`
const MessageWithDriver = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
const IconPhone = styled<any>(MaterialIcons)`
  font-size: 20px;
  color: black;
  margin-right:  16px;
`
const TipDriver = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  margin-bottom: 34px;
`
const IconPayment = styled<any>(MaterialIcons)`
  font-size: 24px;
  color: black;
  margin-right:  8px;
`
const TipDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
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
            <IconPayment name={'payment'}/>
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
