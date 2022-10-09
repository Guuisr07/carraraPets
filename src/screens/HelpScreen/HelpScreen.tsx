import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { Feather } from '@expo/vector-icons'
import { ProfileMenuOptions } from '../ProfileScreen/ProfileMenuOptions'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const StyledContainer = styled.View<any>`
  flex: 1;
  padding-horizontal: 16px;
  background-color: white;
  padding-top: ${({ insets }) => insets};
`
const TitleHelpScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
  margin-bottom: 8px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`
const HeaderContainer = styled.View`
  margin-top: 40px;
`
const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-bottom: 36px;
`
const InfoContentContainer = styled.View`
  margin-bottom: 48px;
`

export const HelpScreen: React.FC<any> = ({ }) => {
  const insets = useSafeAreaInsets()

  return (
    <StyledContainer insets={insets.top}>
      <StatusBar style="dark" />
      <HeaderContainer>
        <TouchableOpacity onPress={Coordinator.goBack}>
          <IconBack name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>
      <InfoContentContainer>
        <TitleHelpScreen>Ajuda</TitleHelpScreen>
        <DescriptionText>
          Aqui tentaremos sanar a maioria de suas duvidas, seja elas em "Forma
          de pagamento", "Detalhes sobre sua corrida", "Duvidas sobre ser um
          motorista parceiro" e etc. Contamos com voce !
        </DescriptionText>
      </InfoContentContainer>
      <ProfileMenuOptions
        label={'Forma de pagamento'}
        iconName={'help-circle-outline'}
        onPress={() => Coordinator.goToPaymentDescriptionScreen()}
      />
      <ProfileMenuOptions
        label={'Detalhes da corrida'}
        iconName={'help-circle-outline'}
        onPress={() => Coordinator.goRaceDetailsScreen()}
      />
      <ProfileMenuOptions
        label={'Como ser um motorista parceiro'}
        iconName={'help-circle-outline'}
        onPress={() => Coordinator.goPartnerDriverScreen()}
      />

    </StyledContainer>
  )
}
