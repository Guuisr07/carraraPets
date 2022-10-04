import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'
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

export const RaceDetailsScreen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Detalhes da corrida' />

            <DescriptionText>
                Entenda mais sobre suas corridas, como funcionam, detalhes e mais.
            </DescriptionText>

            <ProfileMenuOptions
                label={'Como solicitar uma viagem?'}
                iconName={'help-circle-outline'}
            />
            <ProfileMenuOptions
                label={'Como vejo uma estimativa do valor da minha viagem?'}
                iconName={'help-circle-outline'}
            />
            <ProfileMenuOptions
                label={'Como entro em contato com o motorista?'}
                iconName={'help-circle-outline'}
            />
            <ProfileMenuOptions
                label={'Usuários pagam pedágios ou taxas extras?'}
                iconName={'help-circle-outline'}
            />
            <ProfileMenuOptions
                label={'O que são os locais de partida sugeridos?'}
                iconName={'help-circle-outline'}
            />
            <ProfileMenuOptions
                label={'Como avalio um motorista parceiro?'}
                iconName={'help-circle-outline'}
            />
            <ProfileMenuOptions
                label={'Como os preços são calculados?'}
                iconName={'help-circle-outline'}
            />
            <ProfileMenuOptions
                label={'Posso dar um valor extra ao motorista pelo aplicativo?'}
                iconName={'help-circle-outline'}
            />

        </StyledContainer>
    )
}