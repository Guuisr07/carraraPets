import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { TextInput } from '../../components/TextInput/TextInput'
import { Button } from '../../components/Button/Button'

interface ThirdSignUpScreen { }

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
  margin-top: 40px;
  padding-horizontal: 16px;
  `
const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.spacingSizes.mediumLargeSpacing};
  margin-bottom: 16px;
  `
const InputContainer = styled.ScrollView`
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`
const IconLockPlaceholder = styled<any>(Feather)`
`
const InputPassword = styled(TextInput).attrs({
  label: 'Senha',
  leftIcon: <IconLockPlaceholder name={'lock'} />,
  placeholderText: 'Digite a sua senha',
  showVisibilityToggle: true,
})`
  margin-bottom: 16px;
`
const InputRepeatPassword = styled(TextInput).attrs({
  label: 'Confirme a senha',
  leftIcon: <IconLockPlaceholder name={'lock'} />,
  placeholderText: 'Repita a sua senha',
  showVisibilityToggle: true,
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

export const ThirdSignUpScreen: React.FC<ThirdSignUpScreen> = ({ }) => {
  const insets = useSafeAreaInsets()

  return (
    <StyledContainer insets={insets.top}>
      <HeaderContainer>
        <TouchableOpacity onPress={() => Coordinator.goBack()}>
          <BackIcon name={'arrow-left'} />
        </TouchableOpacity>
        <CountPage> 3 / 3</CountPage>
      </HeaderContainer>

      <InfoContainer>
        <Title>Estamos quase lá, agora é{'\n'}hora de cadastrar uma senha</Title>

        <DescriptionText>Lembre-se a sua senha deve ser bem segura, recomendamos utilizar uma combinação com algum caracter especial e números.
        </DescriptionText>

        <InputContainer>
          <InputPassword />
          <InputRepeatPassword />
        </InputContainer>
      </InfoContainer>

      <FooterContainer>
        <Button text='Continuar' />
      </FooterContainer>
    </StyledContainer>
  )
}