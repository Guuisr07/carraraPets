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

export const PaymentDescriptionQuest3Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Pagamento em dinheiro' />

            <ScrollView>

                <DescriptionText >
                    {'\n'}
                    O app da CarraraPets foi projetado para ser usado totalmente com pagamento eletrônico
                    na maioria das cidades.
                    {'\n'}{'\n'}
                    Quando uma viagem termina, a forma de pagamento selecionada é cobrada
                    imediatamente. Um recibo é enviado por e-mail e o histórico de viagens da sua
                    conta é atualizado com informações sobre o trajeto e preço.
                    {'\n'}{'\n'}
                    Não é necessário dar valores extras nas viagens da Uber. Você pode dar um valor
                    extra em dinheiro ao seu motorista.
                </DescriptionText>

            </ScrollView>


        </StyledContainer>
    )
}