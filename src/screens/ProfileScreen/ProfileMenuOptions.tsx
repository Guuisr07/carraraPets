import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

type ProfileMenuOptionsProps = {
  label: string
  iconName: string
  onPress?: () => void
}

const StyledContainer = styled.TouchableOpacity`
  height: 70px;
  border-bottom-width: 1px;
  border-color: lightgray;
  flex-direction: row;
  align-items: center;
`
const LabelOptionsMenu = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
`
const IconItemMenu = styled<any>(MaterialCommunityIcons)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
`

export const ProfileMenuOptions: React.FC<ProfileMenuOptionsProps> = ({
  onPress,
  label,
  iconName,
}) => {
  return (
    <StyledContainer onPress={onPress}>
      <IconItemMenu name={iconName} />
      <LabelOptionsMenu>{label}</LabelOptionsMenu>
    </StyledContainer>
  )
}
