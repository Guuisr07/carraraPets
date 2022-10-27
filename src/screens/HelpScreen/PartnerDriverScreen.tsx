import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { ProfileMenuOptions } from '../ProfileScreen/ProfileMenuOptions'

const StyledContainer = styled.View`
    flex: 1;
    background-color: white;
    padding-horizontal: 16px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
  margin-bottom: 32px;
`

export const PartnerDriverScreen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como ser um motorista parceiro' />

            <DescriptionText>
                Voce gostaria de ser uma motorista parceiro, então venha sanar suas dúvidas.
            </DescriptionText>

            <ProfileMenuOptions
                label={'Como realizar o cadastro?'}
                iconName={'help-circle-outline'}
                onPress={() => Coordinator.goPartnerDriverQuest1Screen()}
            />


        </StyledContainer>
    )
}