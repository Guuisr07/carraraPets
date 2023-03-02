import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import { KeyboardAvoidingView } from 'react-native'

export const StyledContainer = styled.View`
  flex: 1;
`
export const CardRun = styled(KeyboardAvoidingView)`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`

export const ResumeRideContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 16px;
  padding-horizontal: 24px;
`
export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: gray;
`
export const TitleResumeRide = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: black;
`
export const PriceButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  flex-direction: row;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`
export const PriceButtonDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`
export const PaymentIconButton = styled<any>(MaterialIcons)`
  font-size: 20px;
  color: white;
`
export const PriceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: gray;
  margin-top: 8px;
`
export const ProfileButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 50px;
`
export const ProfilePicture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border-width: 3px;
  margin-left: 8px;
  margin-top: 80px;
  border-color: white;
`
export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  text-align: center;
  margin-left: 48px;
`
export const ContainerCardTitle = styled.View`
  padding-vertical: 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: #ddd;
  border-bottom-width: 1px;
  margin-bottom: 16px;
`
export const ImageDog = styled.Image`
  width: 60px;
  height: 60px;
  border-width: 2px;
  border-color: lightgray;
  border-radius: 30px;
  border-width: 2px;
  margin-top: 16px;
`
export const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-left: 16px;
`
