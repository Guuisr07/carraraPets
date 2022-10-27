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

export const RaceDetailsQuest3Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como entro em contato com o motorista?' />
            <ScrollView>
                <DescriptionText >
                    {'\n'}
                    Pelo app, você pode entrar em contato com o motorista parceiro para falar sobre a
                    viagem ou dar outras informações referentes à viagem solicitada.{'\n'}{'\n'}

                    Para entrar em contato com o motorista parceiro:
                    {'\n'}{'\n'}
                    1. Toque na barra que mostra as informações do motorista parceiro na parte
                    inferior da tela.{'\n'}
                    2. Selecione "Mensagens" para enviar uma mensagem para o motorista parceiro.
                    {'\n'}{'\n'}
                    *Lembre-se de que os motoristas parceiros talvez não consigam atender o telefone nem responder a mensagens de texto se estiverem dirigindo. *
                </DescriptionText>
            </ScrollView>


        </StyledContainer>
    )
}