import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { TextInput } from '../../components/TextInput/TextInput'
import { Button } from '../../components/Button/Button'
import { useAuth } from '../../hooks/auth'

type LoginScreen = {
}

const StyledContainer = styled.View<{ insets: number }>`
  padding-top: ${({ insets }) => insets};
  background-color: white;
  flex: 1; 
`
const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const BackIcon = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-top: 20px;
  margin-left: 16px; 
`
const PowerButton = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-top: 20px;
  margin-left: 16px; 
`
const LogoIcon = styled<any>(MaterialCommunityIcons)`
  font-size: 60px;
  margin-top: 40px;
  margin-right: 24px; 
`
export const Photo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;
const InfoContainer = styled.View`
  flex: 1;
  margin-top: 40px;
  margin-left: 16px;
`
const TitleLoginScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  margin-bottom:  16px;
`
const DesciprtionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`
const InputContainer = styled.ScrollView`
  padding-right: 16px;
  margin-top: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
`
const IconMailPlaceholder = styled<any>(Feather)`
`
const PasswordIcon = styled<any>(Feather)`
`
const InputEmail = styled(TextInput).attrs({
  label: 'E-mail',
  leftIcon: <IconMailPlaceholder name={'mail'} />,
  placeholderText: 'Informe seu e-mail',
})`
  margin-bottom: 16px;
`
const InputPassword = styled(TextInput).attrs({
  label: 'Senha',
  leftIcon: <PasswordIcon name={'lock'} />,
  placeholderText: '******',
  showVisibilityToggle: true,
})``
const FooterContainer = styled.View`
  border-top-width: 1px;
  border-color: #D6D6D6;
  background-color: white;
  padding: 16px;
`


export const LoginScreen: React.FC<LoginScreen> = ({ }) => {
  const insets = useSafeAreaInsets()
  const { signOut, user } = useAuth()

  return (
    <>
      <StyledContainer insets={insets.top}>
        <HeaderContainer>
          <TouchableOpacity onPress={() => Coordinator.goBack()}>
            <BackIcon name={'arrow-left'} />
          </TouchableOpacity>
        </HeaderContainer>
         <Photo source={{ uri: user.photo }}/>

        <InfoContainer>
          <TitleLoginScreen>{`Bem-vindo de volta, ${user.name}`}</TitleLoginScreen>
          <DesciprtionText numberOfLines={3}>Como é bom ter você aqui novamente, por {'\n'}favor
            insira as informações abaixo para{'\n'}continuarmos.
          </DesciprtionText>
          <InputContainer>
            <InputEmail />
            <InputPassword />
          </InputContainer>
        </InfoContainer>
        <TouchableOpacity onPress={() => signOut()}>
            <PowerButton name={'power'} />
          </TouchableOpacity>
        <FooterContainer>
          <Button text='Enviar' />
        </FooterContainer>
      </StyledContainer>
    </>
  )
}