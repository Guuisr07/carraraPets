import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { images } from '../../utils/searchAssets'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const StyledContainer = styled.View<any>`
  flex: 1;
  padding-horizontal: 16px;
  background-color: white;
  padding-top: ${({ insets }) => insets};
`
const TitleMessagesScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
  margin-bottom: 16px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
  margin-bottom: 60px;
`
const HeaderContainer = styled.View`
  margin-top: 40px;
`
const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-bottom: 36px;
`
const ImageMessage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 50px;
`

export const MessagesScreen: React.FC<any> = ({}) => {
  const insets = useSafeAreaInsets()

  return (
    <StyledContainer insets={insets.top}>
       <StatusBar style='dark'/>
      <HeaderContainer>
        <TouchableOpacity onPress={Coordinator.goBack}>
          <IconBack name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>
      <TitleMessagesScreen>Mensagens</TitleMessagesScreen>
      <DescriptionText>
        Saiba de todas as nossas novidades e receba todas as atualizações de sua
        corrida no app, vamos manter as notificações centralizadas em apenas um
        único lugar.
      </DescriptionText>
      <ImageMessage source={images.messageImage} />
    </StyledContainer>
  )
}
