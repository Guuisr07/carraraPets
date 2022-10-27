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

export const PaymentDescriptionQuest2Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como atualizar uma forma de pagamento na sua conta?' />
            <ScrollView>

                <DescriptionText >
                    {'\n'}
                    É possível editar a data de validade, o número do CVV e o CEP do endereço de cobrança
                    associados a um cartão de crédito ou débito. Se você tiver um perfil da Uber para
                    Empresas, é possível alterar o perfil associado ao cartão ao selecionar "Pagamento"
                    no menu. Primeiramente, selecione o dado que deseja alterar.
                </DescriptionText>
                <DescriptionText>
                    1. Selecione "Pagamento" no seu app.{'\n'}
                    2. Selecione a opção de pagamento que você quer atualizar.{'\n'}
                    3. Toque em "Editar".{'\n'}
                    4. Faça as alterações e toque em "Salvar" quando terminar.
                    {'\n'}{'\n'}
                    Não é possível alterar o número de um cartão de crédito ou débito, mas você pode
                    removê-lo da sua conta e depois adicioná-lo como uma nova forma de pagamento.
                </DescriptionText>
                <DescriptionText>Como excluir formas de pagamento</DescriptionText>
                <DescriptionText>
                    Sua conta precisa ter sempre pelo menos uma forma de pagamento válida. Se quiser excluir sua
                    única forma de pagamento, primeiro será necessário adicionar uma nova.
                </DescriptionText>
                <DescriptionText>Para excluir uma forma de pagamento:</DescriptionText>
                <DescriptionText>
                    1. Selecione "Pagamento" no seu app.{'\n'}
                    2. Selecione o cartão que quer excluir.{'\n'}
                    3. Toque em "Remover forma de pagamento".
                </DescriptionText>

            </ScrollView>

        </StyledContainer>
    )
}