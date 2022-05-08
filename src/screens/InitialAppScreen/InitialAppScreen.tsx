import React from 'react'
import { ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../components/Button/Button'
import { images } from '../../utils/searchAssets'

type InitialAppScreen = {
}

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  top: 30;
`

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
`
const InfoContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  justify-content: center;
  flex: 1;
 
`

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.spacingSizes.mediumLargeSpacing};
  margin-bottom: 24px;
`
const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  margin-bottom: 80px;
`
const FooterContainer = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 70px;
  padding-left: 16px;
  padding-right: 16px;
`

export const InitialAppScreen: React.FC<InitialAppScreen> = ({ }) => {
  return (
    <BackgroundImage source={images.backgroundImage} >
      <StyledContainer>
        <InfoContainer>
          <Title numberOfLines={2}>Bem vindo {'\n'}ao carrara pets</Title>
          <DescriptionText>A melhor forma de transportar o seu animalzinho. Vamos tratar com muito amor e carinho os nossos fieis companheiros</DescriptionText>
        </InfoContainer>
        <FooterContainer>
          <Button text={'Iniciar'} />
        </FooterContainer>
      </StyledContainer>
    </BackgroundImage>
  )
}