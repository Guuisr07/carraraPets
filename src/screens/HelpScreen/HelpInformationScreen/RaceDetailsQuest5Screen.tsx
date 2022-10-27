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

export const RaceDetailsQuest5Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como avaliar o motorista?' />
            <ScrollView>
                <DescriptionText >
                    {'\n'}
                    Nós levamos as avaliações a sério, pois elas permitem que usuários e motoristas
                    parceiros tenham uma experiência positiva com a gente. Motoristas parceiros com
                    avaliações baixas podem perder o acesso ao app.
                    {'\n'}{'\n'}
                    Para avaliar um motorista parceiro, siga as instruções do app no final da viagem.
                    Também solicitaremos que avalie o seu motorista na parte inferior do seu recibo
                    que receber por e-mail.
                    {'\n'}{'\n'}
                    Você também pode avaliar um motorista parceiro durante a viagem (de acordo com a
                    sua região):
                    {'\n'}{'\n'}
                    Abra o app.{'\n'}{'\n'}
                    1. Na tela principal, toque na tela branca para expandir as informações da viagem.{'\n'}
                    2. Ao lado de "Como está sua viagem?", toque em "Avaliar ou dar valor extra"{'\n'}
                    3. Selecione o número de patinhas (1 a 5) para avaliar o motorista parceiro.{'\n'}
                </DescriptionText>
            </ScrollView>


        </StyledContainer>
    )
}