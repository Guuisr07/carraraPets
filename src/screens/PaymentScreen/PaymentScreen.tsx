import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { Feather, Ionicons } from '@expo/vector-icons'
import { ProfileMenuOptions } from '../ProfileScreen/ProfileMenuOptions'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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
const AddPaymentIcon = styled<any>(Ionicons)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_dark};
`
const InfoContentContainer = styled.View`
  margin-bottom: 60px;
`
const TitleContainerPayment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
  margin-bottom: 8px;
`
const ContainerAddPayment = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PaymentScreen: React.FC<any> = ({}) => {
  const insets = useSafeAreaInsets()

  return (
    <StyledContainer insets={insets.top}>
      <StatusBar style='dark'/>
      <HeaderContainer>
        <TouchableOpacity onPress={Coordinator.goBack}>
          <IconBack name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>
      <InfoContentContainer>
        <TitleHelpScreen>Forma de pagamento</TitleHelpScreen>
        <DescriptionText>
          Adicione ou edite suas formas de pagamento cadastradas
        </DescriptionText>
      </InfoContentContainer>

      <ContainerAddPayment>
        <TitleContainerPayment>
          Adicionar forma de pagamento
        </TitleContainerPayment>
        <TouchableOpacity>
          <AddPaymentIcon name={'ios-add-circle-sharp'} />
        </TouchableOpacity>
      </ContainerAddPayment>
      <ProfileMenuOptions
        label={'4315.****...'}
        iconName={'card-account-details'}
      />
      <ProfileMenuOptions
        label={'5678.****...'}
        iconName={'card-account-details'}
      />
      <ProfileMenuOptions
        label={'1342.****...'}
        iconName={'card-account-details'}
      />
      <ProfileMenuOptions
        label={'9865.****...'}
        iconName={'card-account-details'}
      />
    </StyledContainer>
  )
}
