import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { Feather } from '@expo/vector-icons'

const StyledContainer = styled.View<any>`
  flex: 1;
  padding-horizontal: 16px;
  background-color: white;
  padding-top: ${({ insets }) => insets};
`
const HeaderContainer = styled.View`
  margin-top: 40px;
`
const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-bottom: 36px;
`

export const ConfigScreen: React.FC<any> = ({}) => {
  const insets = useSafeAreaInsets()

  return (
    <StyledContainer insets={insets.top}>
      <StatusBar style="dark" />
      <HeaderContainer>
        <TouchableOpacity onPress={Coordinator.goBack}>
          <IconBack name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>
    </StyledContainer>
  )
}
