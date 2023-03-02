import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Coordinator } from '../../navigation/coordinator/coordinator'
const LottieView = require('lottie-react-native')

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-top: 24px;
`

export const FoundDriver: React.FC<any> = ({ route }) => {
  const animationRef = useRef<Lottie>(null)
  const { destination, origin, setDestination } = route.params

  const driverPerfile = () => {
    setTimeout(
      () =>
        Coordinator.goToDriverProfile({ destination, origin, setDestination }),
      1500
    )
  }

  useEffect(() => {
    animationRef.current?.play()

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120)
  }, [])

  return (
    <StyledContainer>
      <>
        <LottieView
          ref={animationRef}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
          source={require('../../assets/animations/check.json')}
        />
        <DescriptionText>Motorista encontrado</DescriptionText>
        {driverPerfile()}
      </>
    </StyledContainer>
  )
}
