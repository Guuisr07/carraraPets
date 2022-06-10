import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { Feather } from '@expo/vector-icons'

const StyledContainer = styled.SafeAreaView``

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


  return (
    <StyledContainer>
      <TouchableOpacity onPress={() => Coordinator.goBack()}>
        <PowerButton name={'arrow-left'} />
      </TouchableOpacity>
      <TitleScreen>{`O valor da corrida e de R$${route?.params?.price} `}</TitleScreen>
      <TitleScreen>{`Para: ${route?.params?.address} `}</TitleScreen>
    </StyledContainer>
  )
}
