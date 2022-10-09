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

export const RaceDetailsQuest6Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como os preços são calculados?' />
            <ScrollView>
                <DescriptionText >
                    {'\n'}
                    Dependendo da cidade, os preços podem ser calculados antecipadamente ou logo
                    depois do fim da viagem.
                    {'\n'}
                    Veja como esses dois tipos de preços funcionam.
                    {'\n'}
                    Preços predefinidos{'\n'}

                    Com o preço predefinido, você sabe o custo exato da sua viagem antes de
                    solicitá-la. Esse preço inclui (entre outros):
                    {'\n'}
                    * Um preço base{'\n'}
                    * Taxas de tempo estimado e distância do trajeto{'\n'}
                    * A demanda atual de viagens na região
                    {'\n'}{'\n'}
                    Um custo de solicitação, assim como cobranças extras, taxas e pedágios aplicáveis
                    também são incluídos.
                    {'\n'}
                    Ao solicitar uma viagem, você concorda e autoriza a cobrança do preço predefinido
                    quando a viagem terminar.
                    {'\n'}
                    O preço pode aumentar se você viajar para um destino diferente, fizer paradas
                    extras ao longo do trajeto ou se a viagem demorar mais do que o esperado.{'\n'}
                    Se o preço predefinido não for cumprido, você receberá a cobrança de preço mínimo
                    ou um valor baseado no tempo medido e na distância para a sua viagem.{'\n'}
                    O valor incluirá preço base, custo fixo, cobranças extras, pedágios ou outros
                    fatores relevantes como a cobrança de preço dinâmico.{'\n'}
                    Sempre enviaremos um recibo com os valores da viagem. Se o preço cobrado for
                    diferente do predefinido, o recibo explicará o motivo.{'\n'}

                    Preços após a viagem{'\n'}
                    Algumas cidades não têm preços predefinidos. Em vez disso, a cobrança incluirá:
                    {'\n'}{'\n'}
                    * Um preço mínimo{'\n'}
                    * Um preço baseado no tempo e na distancia da sua viagem{'\n'}
                    {'\n'}
                    O valor incluirá preço base, custo fixo, cobranças extras, pedágios e outros
                    fatores relevantes, como preço dinâmico quando a demanda por viagens é alta na
                    região da cidade onde você está solicitando a viagem. Os preços podem variar de
                    acordo com o local, a opção de veículo selecionada e outros fatores
                </DescriptionText>
            </ScrollView>


        </StyledContainer>
    )
}