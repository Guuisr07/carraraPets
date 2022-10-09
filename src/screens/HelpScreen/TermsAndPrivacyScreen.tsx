import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'

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

/** Verificar a parte de scroll(rolagem de tela e adicionar mais informação nos termos) */

export const TermsAndPrivacyScreen: React.FC<any> = ({ }) => {
    return (
        <StyledContainer>
            <CustomHeader nameScreen='Termos e Condições' />
            <ScrollView>
                <DescriptionText>1. Relacionamento Contratual</DescriptionText>

                <DescriptionText>
                    Estes termos de uso (“Termos”) regem seu acesso e uso, como pessoa física, dentro do Brasil,
                    de aplicativos, sites de Internet, conteúdos, bens e também serviços (os “Serviços”)
                    disponibilizados pela Carrara Pets Ltda., sociedade de responsabilidade limitada,
                    estabelecida no Brasil, com sede na Av.Imperatriz Leopoldina, 555, 9º andar, Sala 150,
                    CEP 05305-003, Vila Leopoldina - São Paulo /SP, inscrita no CNPJ sob o
                    nº. 75.665.479/0001-84 (“CarraraPets”).{'\n'}{'\n'}

                    POR FAVOR, LEIA COM ATENÇÃO ESTES TERMOS ANTES DE ACESSAR OU USAR OS
                    SERVIÇOS.{'\n'}{'\n'}
                    Ao acessar e usar os Serviços você concorda com os presentes termos e condições, que
                    estabelecem o relacionamento contratual entre você, na qualidade de usuário(a), e a
                    CarraraPets. Se você não concorda com estes Termos, você não pode acessar nem usar os
                    Serviços.{'\n'}{'\n'}

                    2. Os Serviços
                    {'\n'}{'\n'}
                    Os Serviços integram uma plataforma de tecnologia que permite aos(às) Usuários(as)
                    de aplicativos móveis ou sites de Internet da CarraraPets, fornecidos como parte dos
                    Serviços (cada qual um “Aplicativo”), solicitar e programar serviços de transporte
                    e/ou logística e/ou compra de certos bens com terceiros independentes provedores
                    desses serviços, inclusive terceiros independentes fornecedores de transporte,
                    terceiros independentes fornecedores de logística e terceiros independentes
                    fornecedores de bens, mediante contrato com a CarraraPets ou com determinadas afiliadas
                    da CarraraPets (“Parceiros Independentes”). A menos que diversamente acordado pela CarraraPets
                    em contrato escrito celebrado em separado com você, os Serviços são
                    disponibilizados para seu uso pessoal e não comercial. VOCÊ RECONHECE QUE A CarraraPets
                    NÃO É FORNECEDORA DE BENS, NÃO PRESTA SERVIÇOS DE TRANSPORTE OU LOGÍSTICA, NEM
                    FUNCIONA COMO TRANSPORTADORA, E QUE TODOS ESSES SERVIÇOS DE TRANSPORTE OU
                    LOGÍSTICA SÃO PRESTADOS POR PARCEIROS INDEPENDENTES, QUE NÃO SÃO EMPREGADOS(AS)
                    E NEM REPRESENTANTES DA CARRARAPETS.
                    {'\n'}{'\n'}
                    Licença.
                    Sujeito ao cumprimento destes Termos, a CarraraPets outorga a você uma licença limitada,
                    não exclusiva, não passível de sublicença, revogável e não transferível para:
                    (i) acesso e uso dos Aplicativos em seu dispositivo pessoal, exclusivamente
                    para o seu uso dos Serviços; e (ii) acesso e uso de qualquer conteúdo,
                    informação e material correlato que possa ser disponibilizado por meio dos
                    Serviços, em cada caso, para seu uso pessoal, nunca comercial. Quaisquer
                    direitos não expressamente outorgados por estes Termos são reservados à CarraraPets e
                    suas afiliadas licenciadoras.

                </DescriptionText>
            </ScrollView>

        </StyledContainer >
    )
}