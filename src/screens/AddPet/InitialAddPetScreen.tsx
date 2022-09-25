import React from 'react'
import styled from 'styled-components/native'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
`

export const InitialAddPetScreen: React.FC<any> = ({}) => {
  return (
    <StyledContainer>
      <CustomHeader nameScreen="Cadastrar Pet" />
    </StyledContainer>
  )
}
