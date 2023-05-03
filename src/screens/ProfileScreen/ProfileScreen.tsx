import React, { useEffect } from 'react'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { useAuth } from '../../hooks/auth'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ImageStore, Platform, StatusBar, TouchableOpacity } from 'react-native'
import { ProfileButton } from './ProfileButton'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { ProfileMenuOptions } from './ProfileMenuOptions'
import { images } from '../../utils/searchAssets'
import LogoApp from '../../assets/icons/logo.svg'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`
const HeaderContainer = styled.View`
  flex: 0.76;
  padding-horizontal: 16px;
  flex-direction: column;
  elevation: 5;
  background-color: ${({ theme }) => theme.colors.primary};
`

const ProfilePicture = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  margin-top: 2px;
  elevation: 5;
`
const ProfileInfoContainer = styled.View`
  margin-top: 60px;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
`
const ProfilePhotoContainer = styled.View``
const NameProfile = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`
const RatingAndNameContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 24px;
  margin-left: 24px;
`
const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.shape};
  border-radius: 35;
  width: 50px;
  padding: 6px;
  margin-top: 8px;
`
export const StarIcon = styled<any>(FontAwesome)`
  font-size: 10px;
  color: white;
`
const Rating = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-left: 4px;
`
const InteractionButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${Platform.OS === 'ios' ? 20 : 30}px;
`
const DescriptionContainer = styled.View`
  flex: 1.5;
`
const ButtonInput = styled.TouchableOpacity`
  padding-left: 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  border-radius: 25px;
`
const LabelInputButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 16px;
`
const IconSearch = styled<any>(Feather)`
  font-size: 24px;
`
const ContainerButton = styled.View`
  padding-horizontal: 16px;
  padding-top: 16px;
  padding-bottom: 30px;
  border-bottom-width: 6px;
  border-color: ${({ theme }) => theme.colors.background};
`
const MenuOptions = styled.View`
  flex: 1;
`

const WelcomeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`
const MapContainer = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 20px;
  background-color: red;
  margin-top: 24px;
`

export const ProfileScreen: React.FC<any> = ({}) => {
  const { user, signOut } = useAuth()
  const insets = useSafeAreaInsets()

  const sendServer = async () => {
    const response = await fetch(
      'https://mvpcarrarapets.herokuapp.com/CreateUser',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.name,
        }),
      }
    )
  }

  const handleGoToMapScreen = () => {
    Coordinator.goToMapScreen()
    sendServer()
  }

  return (
    <StyledContainer insets={insets.top}>
      <StatusBar barStyle={'light-content'} />
      <HeaderContainer
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
        }}>
        <ProfileInfoContainer>
          <ProfilePhotoContainer>
            <ProfilePicture source={images.avatarImage} />
          </ProfilePhotoContainer>
          <RatingAndNameContainer>
            <WelcomeText>Bem-vindo</WelcomeText>
            <NameProfile>{'Guilherme Santana'}</NameProfile>
            <RatingContainer>
              <StarIcon name={'star'} />
              <Rating>5.0</Rating>
            </RatingContainer>
          </RatingAndNameContainer>
        </ProfileInfoContainer>
        <InteractionButtons>
          <ProfileButton
            nameIcon="help-circle"
            label="Ajuda"
            onPress={() => Coordinator.goToHelpScreen()}
          />
          <ProfileButton
            nameIcon="card"
            label="Pagamento"
            onPress={() => Coordinator.goToPaymentScreen()}
          />
          <ProfileButton
            nameIcon="compass"
            label="Viagens"
            onPress={Coordinator.goToUserTravelsScreen}
          />
        </InteractionButtons>
      </HeaderContainer>

      <DescriptionContainer>
        <ContainerButton>
          <ButtonInput onPress={handleGoToMapScreen}>
            <IconSearch name={'search'} />
            <LabelInputButton>Para onde vamos?</LabelInputButton>
          </ButtonInput>
          <MapContainer>
            <MapView
              style={{ flex: 1, borderRadius: 20, zIndex: -20 }}
              provider={PROVIDER_GOOGLE}
            />
          </MapContainer>
        </ContainerButton>

        <MenuOptions>
          <ProfileMenuOptions
            label={'Perfil do Pet'}
            iconName={'dog-service'}
            onPress={() => Coordinator.goToListingPetsScreen()}
          />
          <ProfileMenuOptions
            label={'Mensagens'}
            iconName={'email'}
            onPress={() => Coordinator.goToMessagesScreen()}
          />
          <ProfileMenuOptions
            label={'Configurações'}
            iconName={'cog'}
            onPress={() => Coordinator.goToConfigScreen()}
          />
          <ProfileMenuOptions
            label={'Termos e Condições'}
            iconName={'note-check-outline'}
            onPress={() => Coordinator.goTermsAndPrivacyScreen()}
          />
          <ProfileMenuOptions
            label={'Sair do app'}
            iconName={'logout'}
            onPress={signOut}
          />
        </MenuOptions>
      </DescriptionContainer>
    </StyledContainer>
  )
}
