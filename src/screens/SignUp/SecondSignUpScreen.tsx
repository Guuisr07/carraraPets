import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { TextInput } from '../../components/TextInput/TextInput'
import { Button } from '../../components/Button/Button'

interface SecondSignUpScreen { }

const StyledContainer = styled.View<{ insets: number }>`
  padding-top: ${({ insets }) => insets};
  background-color: white;
  flex: 1; 
`
const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 16px;
  justify-content: space-between;
`
const BackIcon = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-top: 40px;
`
const CountPage = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.spacingSizes.mediumSpacing};
  margin-top: 40px;
  `
const InfoContainer = styled.View`
  flex: 1;
  margin-top: 80px;
  padding-horizontal: 16px;
  `
const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => theme.spacingSizes.mediumLargeSpacing};
    margin-bottom: 16px;
  `
const InputContainer = styled.View`
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`
const IconMailPlaceholder = styled<any>(Feather)`
`
const InputEmail = styled(TextInput).attrs({
  label: 'E-mail',
  leftIcon: <IconMailPlaceholder name={'mail'} />,
  placeholderText: 'Informe seu e-mail',
})`
  margin-bottom: 16px;
`
const FooterContainer = styled.View`
  border-top-width: 1px;
  border-color: #D6D6D6;
  background-color: white;
  padding: 16px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 36px;
`

export const SecondSignUpScreen: React.FC<SecondSignUpScreen> = ({ }) => {
  const insets = useSafeAreaInsets()

  return (
    <StyledContainer insets={insets.top}>
      <HeaderContainer>
        <TouchableOpacity onPress={() => Coordinator.goBack()}>
          <BackIcon name={'arrow-left'} />
        </TouchableOpacity>
        <CountPage> 2 / 3</CountPage>
      </HeaderContainer>

      <InfoContainer>
        <Title>Bem-vindo ao CarraraPets!{'\n'}
          Agora nos informe{'\n'}o seu e-mail</Title>

        <DescriptionText>Este e-mail é importante, porquê iremos encaminhar 
          informações essenciais.
        </DescriptionText>

        <InputContainer>
          <InputEmail />
        </InputContainer>
      </InfoContainer>

      <FooterContainer>
        <Button text='Continuar' onPress={() => Coordinator.goToThirdSignUpScreen()}/>
      </FooterContainer>
    </StyledContainer>
  )
}