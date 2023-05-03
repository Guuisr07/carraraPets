import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgProps } from 'react-native-svg'
import styled from 'styled-components/native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

type ProfileButtonProps = {
  label: string
  nameIcon: string
  onPress?: () => void
}

const StyledContainerButton = styled.TouchableOpacity`
  width: 90px;
  height: 70px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`
const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`
const IconButtons = styled<any>(Ionicons)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.shape};
`

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  label,
  nameIcon,
  onPress,
  ...rest
}) => {
  return (
    <StyledContainerButton onPress={onPress}>
      <IconButtons name={nameIcon} />

      <Label>{label}</Label>
    </StyledContainerButton>
  )
}
