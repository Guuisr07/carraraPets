import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

interface ButtonProps extends TouchableOpacityProps {
  text: string
  onPress?: () => void
}

const StyledButton = styled.TouchableOpacity`
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #89D3B1;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  
`

const DescriptionButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: white;
`

export const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <StyledButton onPress={onPress}>
      <DescriptionButton>{text}</DescriptionButton>
    </StyledButton>
  )
}