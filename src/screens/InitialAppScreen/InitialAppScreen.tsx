import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../components/Button/Button'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { images } from '../../utils/searchAssets'

type InitialAppScreen = {
}


const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`
const InfoContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  justify-content: flex-end;
  flex: 1;
`

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.spacingSizes.mediumLargeSpacing};
  margin-bottom: 16px;
`
const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  
`
const ImageBackground = styled.Image`
  width: 300px;
  height: 300px;
`
const FooterContainer = styled.View`
  width: 100%;
  padding-bottom: 16px;
  padding-horizontal: 16px;
  flex: 0.5;
  justify-content: flex-end;
`

export const InitialAppScreen: React.FC<InitialAppScreen> = ({ }) => {
  return (
    <StyledContainer>
      <InfoContainer>
        <Title numberOfLines={2}>Bem vindo {'\n'}ao carrara pets</Title>
        <DescriptionText>A melhor forma de transportar o seu animalzinho. Vamos tratar com muito amor e carinho os nossos fieis companheiros</DescriptionText>
      </InfoContainer>

      <ImageBackground source={images.initialScreenImage} resizeMode={'center'} />

      <FooterContainer>
        <View style={{ marginBottom: 16 }}>
          <Button text={'Login'} onPress={() => Coordinator.goToLoginScreen()} />
        </View>
        <Button text={'Cadastro'} onPress={() => Coordinator.goToFisrtSignUpScreen()}/>
      </FooterContainer>
    </StyledContainer>
  )
}

//Este e-mail é importante, porquê iremos encaminhar informações essenciais.