import React from 'react'
import styled from 'styled-components/native'

type ButtonProps = {
  text: string
}

const StyledButton = styled.TouchableOpacity`
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  
`

const DescriptionButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: white;
`

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <StyledButton>
      <DescriptionButton>{text}</DescriptionButton>
    </StyledButton>
  )
}