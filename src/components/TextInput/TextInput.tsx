import React, { ReactElement, useCallback, useState } from 'react'
import {
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { StyleProp } from 'react-native'
import { Feather } from '@expo/vector-icons'

export interface TextInputProps {
  value?: string
  onChange?: any
  helperText?: React.JSXElementConstructor | string
  disabled?: boolean
  required?: boolean
  optional?: boolean
  onError?: boolean
  name?: string
  width?: string
  showVisibilityToggle?: boolean
  label?: string
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  placeholderText?: string | ReactElement
  keyboardType?: string
  sizeLabelText?: string
  style?: StyleProp<ViewStyle>
}
const StyledTextInput = styled(RNTextInput)<any>`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacingSizes.smallSpacing}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

const InputContainer = styled(View)<any>`
  flex-direction: row;
  align-items: center;
  height: 50px;
  background: ${({ theme, onError }) =>
    onError ? theme.colors.attention : theme.colors.shape};
  border: 1px solid
    ${({ theme, onError }) =>
      onError ? theme.colors.attention : theme.colors.background};
  border-radius: 8px;
  padding: 0px ${({ theme }) => theme.spacingSizes.mediumSpacing}px;
  width: 100%;
`
const Container = styled(View)<{ width?: string }>`
  width: ${({ width }) => width ?? '100%'};
`
const LabelContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacingSizes.smallSpacing}px;
`

const StyledText = styled.Text<any>`
  margin-top: ${({ gutterTop }) => (gutterTop ? 8 : 0)};
`

const IconEyeOn = styled<any>(Feather)`
  font-size: 16px;
`
const IconEyeOff = styled<any>(Feather)`
  font-size: 16px;
`

export const TextInput: React.FC<TextInputProps> = ({
  width,
  showVisibilityToggle,
  helperText,
  label,
  required,
  value,
  onChange,
  disabled,
  optional,
  leftIcon,
  rightIcon,
  placeholderText,
  onError,
  keyboardType,
  sizeLabelText,
  style,
}) => {
  const [isTextVisible, setIsTextVisible] = useState(false)
  const onVisibilityToggle = useCallback(() => {
    setIsTextVisible(!isTextVisible)
  }, [isTextVisible])
  const requiredText = required ? 'Obrigatório' : 'Opcional'
  const theme = useTheme()
  const renderRequirementLabel = (text: string) => (
    <StyledText fontSize={'12px'} fontWeight={'400'}>
      {text}
    </StyledText>
  )
  const renderLabel = (text: string) => (
    <StyledText
      fontSize={sizeLabelText ? sizeLabelText : '16px'}
      color={'gray'}
      fontWeight={'400'}>
      {text}
    </StyledText>
  )
  const renderHelpText = (text: string) => (
    <StyledText fontSize={'14px'} fontWeight={'400'} gutterTop>
      {text}
    </StyledText>
  )
  //TODO: Usar icon correspondente
  const renderVisibilityToggleButton = () => (
    <TouchableOpacity onPress={onVisibilityToggle}>
      {isTextVisible ? (
        <IconEyeOn name={'eye'} />
      ) : (
        <IconEyeOff name={'eye-off'} />
      )}
    </TouchableOpacity>
  )
  const renderInput = () => (
    <StyledTextInput
      placeholder={placeholderText}
      placeholderTextColor={theme.colors.text}
      secureTextEntry={showVisibilityToggle ? !isTextVisible : false}
      value={value}
      onChangeText={onChange}
      editable={!disabled}
      paddingVertical={0}
      autoCapitalize={'none'}
      keyboardType={keyboardType}
    />
  )

  return (
    <Container width={width} style={style}>
      <LabelContainer>
        {label && renderLabel(label)}
        {(required || optional) && renderRequirementLabel(requiredText)}
      </LabelContainer>
      <InputContainer onError={onError}>
        {leftIcon}
        {renderInput()}
        {!showVisibilityToggle && rightIcon}
        {showVisibilityToggle && renderVisibilityToggleButton()}
      </InputContainer>
      {helperText && renderHelpText(helperText)}
    </Container>
  )
}
