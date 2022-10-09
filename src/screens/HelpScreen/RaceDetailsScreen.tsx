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
                onPress={() => Coordinator.goRaceDetailsQuest1Screen()}
            />
            <ProfileMenuOptions
                label={'Como vejo uma estimativa do valor da minha viagem?'}
                iconName={'help-circle-outline'}
                onPress={() => Coordinator.goRaceDetailsQuest2Screen()}
            />
            <ProfileMenuOptions
                label={'Como entro em contato com o motorista?'}
                iconName={'help-circle-outline'}
                onPress={() => Coordinator.goRaceDetailsQuest3Screen()}
            />
            <ProfileMenuOptions
                label={'Usuários pagam pedágios ou taxas extras?'}
                iconName={'help-circle-outline'}
                onPress={() => Coordinator.goRaceDetailsQuest4Screen()}
            />
            <ProfileMenuOptions
                label={'Como avaliar o motorista?'}
                iconName={'help-circle-outline'}
                onPress={() => Coordinator.goRaceDetailsQuest5Screen()}
            />
            <ProfileMenuOptions
                label={'Como os preços são calculados?'}
                iconName={'help-circle-outline'}
                onPress={() => Coordinator.goRaceDetailsQuest6Screen()}
            />

        </StyledContainer>
    )
}