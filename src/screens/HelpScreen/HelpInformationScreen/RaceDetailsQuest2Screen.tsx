import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { CustomHeader } from '../../../components/CustomHeader/CustomHeader'



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

export const RaceDetailsQuest2Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como vejo uma estimativa do valor da minha viagem?' />
            <ScrollView>
                <DescriptionText >
                    {'\n'}
                    Você consegue ver uma estimativa de preço na tela do seu celular antes de
                    solicitar uma viagem.
                    {'\n'}
                    Vale lembrar que os preços das viagens podem variar de acordo com o trânsito,
                    o clima e outros fatores.{'\n'}

                    Para exemplificar a cobrança, foi realizado a fórmula: {'\n'}
                    Valor base + (Valor KM * KM) + (Valor minuto * minuto) maior ou igual Valor mínimo.
                </DescriptionText>
            </ScrollView>


        </StyledContainer>
    )
}