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

export const PaymentDescriptionQuest1Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Quais são as formas de pagamento disponíveis?' />
            <ScrollView>
                <DescriptionText>
                    {'\n'} Para solicitar viagens, adicione e selecione a forma de pagamento de sua preferência. Dependendo do país e da cidade, ela pode ser cartão de crédito, dinheiro ou PagSeguro. Quando a viagem termina, a cobrança é feita na forma de pagamento selecionada.{'\n'}{'\n'}
                    Durante a viagem, veja no app se a forma de pagamento de sua preferência está selecionada. Deslize a tela para cima e toque na forma de pagamento escolhida antes do fim da viagem.
                </DescriptionText>

                <DescriptionText >Para adicionar uma forma de pagamento:  </DescriptionText>

                <DescriptionText>
                    1.Selecione "Pagamento" no seu app.{'\n'}
                    2.Toque em "Adicionar forma de pagamento".{'\n'}
                    3.Para adicionar uma forma de pagamento: digite as informações dele manualmente
                    ou selecione outra forma, se preferir.
                </DescriptionText>
            </ScrollView>

        </StyledContainer>
    )
}