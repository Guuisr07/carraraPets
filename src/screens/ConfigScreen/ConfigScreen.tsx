import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { images } from '../../utils/searchAssets'

const StyledContainer = styled.View<any>`
  flex: 1;
  padding-horizontal: 16px;
  background-color: white;
  padding-top: ${({ insets }) => insets};
`
const HeaderContainer = styled.View`
  margin-top: 40px;
`
const TitleConfigScreen = styled.Text`
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
  margin-bottom: 32px;
`
const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-bottom: 36px;
`

const ImageConfigScreen = styled.Image`
  width: 100%;
  height: 350px;
  border-radius: 50px;
`
const ContainerImage = styled.View`
  flex: 1;
`

export const ConfigScreen: React.FC<any> = ({ }) => {
    const insets = useSafeAreaInsets()

    return (
        <StyledContainer insets={insets.top}>
            <StatusBar style="dark" />
            <HeaderContainer>
                <TouchableOpacity onPress={Coordinator.goBack}>
                    <IconBack name={'arrow-left'} />
                </TouchableOpacity>
            </HeaderContainer>
            <TitleConfigScreen>Configurações</TitleConfigScreen>
            <DescriptionText>
                Aqui vamos auxiliar o usuario para que tenha a liberdade de configurar o
                seu perfil e informacoes pessoais.
            </DescriptionText>

            <ContainerImage>
                <ImageConfigScreen source={images.configImage} />
            </ContainerImage>
        </StyledContainer>
    )
}
