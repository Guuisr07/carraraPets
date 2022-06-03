import React from 'react'
import styled from 'styled-components/native'
import LogoApp from '../../assets/icons/logo.svg'
import LogoApple from '../../assets/icons/apple.svg'
import LogoGoogle from '../../assets/icons/google.svg'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { SignInSocialButton } from '../../components/SignInSocialButton/SignInSocialButton'
import { useAuth } from '../../hooks/auth'
import { Alert } from 'react-native'

type InitialAppScreen = {
}


const StyledContainer = styled.View`
  flex: 1;
  
  background-color: white;
`
const Header = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
`

const TitleWrapper = styled.View`
  align-items: center;
`

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: 45px;
`
const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`
const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
`
const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
  justify-content: space-between;
`

export const InitialAppScreen: React.FC<InitialAppScreen> = ({ }) => {
  const { signInWithGoogle } = useAuth()

  const handleSignInWithGoogle = async () => {
     
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Nao foi possivel conectar a conta Google')
    }
  }

  return (
    <StyledContainer>
      <Header>
        <TitleWrapper>
          <LogoApp width={120} height={68} />
          <Title >
            Embarque {'\n'}
            nesta diversão com{'\n'}
            o seu pet
          </Title>

        </TitleWrapper>

        <SignInTitle>
          Faca o seu login com{'\n'}
          uma das contas abaixo
        </SignInTitle>

      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton title='Entrar com o google' svg={LogoGoogle} onPress={() => handleSignInWithGoogle()}/>
          <SignInSocialButton title='Entrar com Apple' svg={LogoApple} onPress={handleSignInWithGoogle}/>
        </FooterWrapper>
      </Footer>
    </StyledContainer>
  )
}
