import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'
import { images } from '../../utils/searchAssets'


const StyledContainer = styled.View`
    flex: 1;
    background-color: white;
    padding-horizontal: 16px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
  margin-bottom: 32px;
`

const ImageUserTravelsScreen = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 50px;
`
const ContainerImage = styled.View`
  flex: 1;
`


export const UserTravelsScreen: React.FC<any> = ({ }) => {
  return (
    <StyledContainer>
      <CustomHeader nameScreen='Viagens' />

      <DescriptionText>
        Aqui você encontra o seu histórico de viagens realizadas.
      </DescriptionText>

      <ContainerImage>
        <ImageUserTravelsScreen source={images.travelImage} />
      </ContainerImage>

    </StyledContainer>


  )
}