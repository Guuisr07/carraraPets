import React from 'react'
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

export const PartnerDriverQuest1Screen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Como realizar o cadastro?' />

            <DescriptionText></DescriptionText>
            <DescriptionText >
                A contratação de um motorista parceiro, será realizada através do próprio aplicativo em uma
                aba específica para motoristas parceiros "Seja Parceiro". O processo de cadastro será feito
                em três etapas, a primeira que seria o pré-cadastro, será preenchido as informações do
                motorista como Nome, CPF, CNH, telefone, e-mail, idade, endereço, placa e modelo do veículo,
                se tem pet ou não e uma carta respondendo a seguinte pergunta "Por que deverá ser aceito?".
                Na segunda etapa teremos uma entrevista com um psicólogo e um teste psicanalítico e
                psicotécnico, e por fim a etapa de confirmação de cadastro, onde o candidato irá receber um
                email com o resultado.
            </DescriptionText>



        </StyledContainer>
    )
}