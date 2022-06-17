import React from 'react'
import styled from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native'

interface SignInSocialButtonProps extends RectButtonProps {
  title: string
  svg: React.FC<SvgProps>
  onPress: () => void
}

const Button = styled(TouchableOpacity)`
  height: ${RFValue(56)}px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`
const ImageContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;
`
const Text = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium}; 
  font-size: ${RFValue(14)}px;
`

export const SignInSocialButton: React.FC<SignInSocialButtonProps> = ({ title, svg: Svg, onPress, ...rest }) => {

  return (
    <Button onPress={onPress}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>
        {title}
      </Text>
    </Button>
  )
}