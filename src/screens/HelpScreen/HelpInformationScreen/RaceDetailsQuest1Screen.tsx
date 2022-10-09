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

export const RaceDetailsQuest1Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como solicitar uma viagem?' />
            <ScrollView>
                <DescriptionText >
                    {'\n'}
                    Veja como solicitar uma viagem no app da Uber:
                    {'\n'}{'\n'}
                    1. Abra o app da CarraraPets e digite o endereço do seu destino no campo "Para onde?"{'\n'}
                    2. Deslize para cima para ver todas as opções de veículos disponíveis na sua região.
                    Toque em uma opção para selecioná-la para sua viagem.{'\n'}

                    3. Pode ser necessário confirmar seu local de partida. Para isso, mova o marcador no
                    mapa ou selecione sua localização na lista. Toque em "Confirmar local de partida" para
                    enviar sua solicitação para os motoristas parceiros disponíveis na região.{'\n'}

                    4. Se não pedirmos para você confirmar o local de partida, toque em "Confirmar CarraraPets"
                    para enviar seu pedido aos motoristas parceiros que estiverem disponíveis na região.{'\n'}

                    5. Você verá o tempo estimado para encontrarmos um motorista parceiro elegível. Se não
                    houver motoristas parceiros disponíveis para o tipo de viagem que você escolheu, o app
                    sugerirá outro tipo de viagem com os motoristas parceiros disponíveis nos arredores.{'\n'}

                    6. Quando um motorista parceiro aceitar sua solicitação, você poderá ver a localização dele
                    e a previsão de chegada no mapa.
                    {'\n'}{'\n'}
                    O app avisará se não houver motoristas disponíveis para sua solicitação.
                </DescriptionText>
            </ScrollView>


        </StyledContainer>
    )
}