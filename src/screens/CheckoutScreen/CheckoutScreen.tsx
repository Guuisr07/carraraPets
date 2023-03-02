import React, { useEffect } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
const LottieView = require('lottie-react-native')

const StyledContainer = styled.View`
  flex: 1;
`
const HeaderContainer = styled.View<{ insets: number }>`
  padding-top: ${({ insets }) => insets};
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50%;
`
const StyledDescriptionContainer = styled.View`
  height: 50%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-top: 30px;
`
const PowerButton = styled<any>(Feather)`
  font-size: 30px;
  color: white;
  margin-top: 20px;
  margin-left: 16px;
`
const AnimationContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  height: 200px;
  width: 200px;
  elevation: 5;
  margin-top: ${RFPercentage(-15)}px;
`

export const CheckoutScreen: React.FC<any> = ({ route }) => {
  const insets = useSafeAreaInsets()
  const { destination, origin, setDestination } = route.params

  const foundDriver = () => {
    setTimeout(
      () =>
        Coordinator.goToFoundDriver({ destination, origin, setDestination }),
      5000
    )
  }

  return (
    <StyledContainer>
      <HeaderContainer insets={insets.top}>
        <TouchableOpacity onPress={() => Coordinator.goBack()}>
          <PowerButton name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>
      <StyledDescriptionContainer>
        <AnimationContainer
          style={{
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <>
            <LottieView
              autoPlay
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                backgroundColor: 'transparent',
              }}
              source={require('../../assets/animations/dog-walking.json')}
            />
            {foundDriver()}
          </>
        </AnimationContainer>
        <DescriptionText>Encontrando motorista...</DescriptionText>
      </StyledDescriptionContainer>
    </StyledContainer>
  )
}
