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

export const RaceDetailsQuest4Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Usuários pagam pedágios ou taxas extras?' />
            <ScrollView>
                <DescriptionText >
                    {'\n'}
                    Para ver as informações que se aplicam à sua região, no canto superior da página,
                    selecione a cidade onde você está.
                    {'\n'}{'\n'}
                    Cobranças adicionais, como pedágios, cobranças extras e outras taxas, podem se
                    aplicar à sua viagem. Essas cobranças são automaticamente adicionadas ao preço.
                    {'\n'}{'\n'}
                    As cobranças adicionadas ao preço da viagem podem não corresponder exatamente ao
                    valor pago pelo seu motorista. Por exemplo: uma cobrança extra quando seu
                    motorista pagar um pedágio ao retornar para a cidade de origem da viagem ou por
                    partidas e chegadas em um aeroporto.
                    {'\n'}{'\n'}
                    Você também pode receber a cobrança do valor padrão de um pedágio quando o
                    motorista parceiro tiver direito a um desconto por:
                    {'\n'}{'\n'}
                    - Estar em uma pista para veículos de alta ocupação{'\n'}
                    - Dirigir um veículo elétrico{'\n'}
                    - Usar um transponder
                    {'\n'}{'\n'}
                    Em algumas cidades, os valores dos pedágios e cobranças extras são uma estimativa.
                    Isso se deve a flutuações nos valores realmente pagos. Também é possível que você
                    pague ao seu motorista outras cobranças relacionadas a custos ou inconveniências
                    diversas, como uma taxa de estacionamento para entrar em algum local ou uma viagem
                    de retorno de longa distância após a chegada ao seu destino.{'\n'}
                    {'\n'}
                    Dependendo da cobrança e do local, esses custos adicionais podem ser:
                    {'\n'}{'\n'}
                    - Retidos pelo seu motorista{'\n'}
                    - Pagos por ele{'\n'}
                    - Repassados ao aeroporto ou a terceiros{'\n'}
                </DescriptionText>
            </ScrollView>


        </StyledContainer>
    )
}