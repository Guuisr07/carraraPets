import React, { useEffect, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Coordinator } from '../../navigation/coordinator/coordinator'

const StyledContainer = styled.View`
  flex: 1;
`

const TitleScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
const PowerButton = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-top: 20px;
  margin-left: 16px;
`

export const CheckoutScreen: React.FC<any> = ({ route }) => {
  console.log(route)
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
      <TouchableOpacity onPress={() => Coordinator.goBack()}>
        <PowerButton name={'arrow-left'} />
      </TouchableOpacity>
      {/* <TitleScreen>{`O valor da corrida e de R$${route?.params?.price} `}</TitleScreen>
      <TitleScreen>{`Para: ${route?.params?.address} `}</TitleScreen> */}
    </StyledContainer>
  )
}
