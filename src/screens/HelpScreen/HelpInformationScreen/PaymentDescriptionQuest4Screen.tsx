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

export const PaymentDescriptionQuest4Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como funcionam as viagens pagas em dinheiro?' />
            <ScrollView>
                <DescriptionText >
                    {'\n'}
                    Viagens em dinheiro devem ser pagas diretamente ao motorista parceiro quando chegar
                    ao seu destino. O valor pago deverá ser o que aparece no aplicativo do parceiro, que
                    já incluirá possíveis taxas adicionais de tempo e distância, tempo de espera ou
                    valores pendentes de viagens anteriores (caso você tenha usado esta opção
                    anteriormente).
                    {'\n'}{'\n'}
                    Lembre-se de sempre verificar o valor estimado da viagem antes de solicitá-la,
                    e caso não tenha a quantia suficiente, altere o método de pagamento no seu
                    aplicativo antes de pedir a viagem, pois não é possível alterá-lo durante ou
                    depois.
                    {'\n'}{'\n'}
                    Você pode alterar o método de pagamento no aplicativo depois de selecionar os
                    locais de embarque e desembarque da sua viagem, na barra inicial logo acima da
                    opção pesquisa na aba "Pagamento".
                </DescriptionText>
            </ScrollView>


        </StyledContainer>
    )
}