import { KeyboardAvoidingView } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'

export const StyledContainer = styled.View`
  flex: 1;
`
export const CardRun = styled(KeyboardAvoidingView)`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`
export const ContainerCardTitle = styled.View`
  padding-vertical: 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: #ddd;
  border-bottom-width: 1px;
`
export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  text-align: center;
  margin-left: 48px;
`
export const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-left: 16px;
`
export const DriverImage = styled.Image`
  width: 70px;
  height: 70px;
  border-width: 2px;
  border-radius: 60px;
  border-width: 2px;
`
export const InfoDescriptionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 16px;
`
export const AnimationContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  elevation: 5;
  margin-top: 16px;
`
export const FinishTemp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  text-align: center;
  margin-left: 48px;
`
export const TextContainer = styled.View`
  flex-direction: column;
  align-items: center;
`
export const NameProfile = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
export const RatingAndNameContainer = styled.View`
  flex-direction: column;
  flex: 1;
  margin-top: 16px;
  margin-left: 16px;
`
export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: lightgray;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.text_dark};
  border-radius: 35;
  width: 70px;
  height: 25px;
  padding: 2px;
  margin-top: 8px;
`
export const StarIcon = styled<any>(FontAwesome)`
  font-size: 12px;
  color: black;
`
export const Rating = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
`
export const CarImage = styled.Image`
  width: 70px;
  height: 70px;
`
export const RunContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 16px;
`
export const IconCar = styled<any>(MaterialIcons)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 16px;
  margin-right: 16px;
  margin-bottom: 2px;
`
export const CarContainer = styled.View`
  flex: 1;

  align-items: flex-end;
`
export const DescriptionTextCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
`
export const FooterContainer = styled.View`
  flex: 0.6;
  border-width: 1px;
  flex-direction: row;
  border-color: lightgray;
  justify-content: center;
  align-items: center;
`
export const MessageWithDriver = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
export const IconPhone = styled<any>(MaterialIcons)`
  font-size: 20px;
  color: black;
  margin-right: 16px;
`
export const TipDriver = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  margin-bottom: 34px;
`
export const IconPayment = styled<any>(MaterialIcons)`
  font-size: 24px;
  color: black;
  margin-right: 8px;
`
export const TipDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
