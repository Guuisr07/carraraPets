import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Coordinator } from '../../navigation/coordinator/coordinator'

type CustomHeaderProps = {
  nameScreen?: string
}

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
const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-bottom: 36px;
`

export const CustomHeader: React.FC<CustomHeaderProps> = ({ nameScreen }) => {
  return (
    <>
      <HeaderContainer>
        <TouchableOpacity onPress={Coordinator.goBack}>
          <IconBack name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>
      <TitleConfigScreen>{nameScreen}</TitleConfigScreen>
    </>
  )
}
