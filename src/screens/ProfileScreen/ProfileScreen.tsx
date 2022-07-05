import React, { useEffect } from 'react'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { useAuth } from '../../hooks/auth'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform, StatusBar, TouchableOpacity } from 'react-native'
import { ProfileButton } from './ProfileButton'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { ProfileMenuOptions } from './ProfileMenuOptions'
import LogoApp from '../../assets/icons/logo.svg'

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`
const HeaderContainer = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  flex-direction: column;
  elevation: 5;
  background-color: ${({ theme }) => theme.colors.primary};
`

const ProfilePicture = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  elevation: 5;
`
const ProfileInfoContainer = styled.View`
  margin-top: 60px;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  justify-content: space-between;
`
const ProfilePhotoContainer = styled.View``
const NameProfile = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-top: 16px;
`
const RatingAndNameContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 24px;
`
const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.shape};
  border-radius: 35;
  width: 70px;
  padding: 6px;
  margin-top: 8px;
`
export const StarIcon = styled<any>(FontAwesome)`
  font-size: 16px;
  color: white;
`
const Rating = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-left: 8px;
`
const InteractionButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${Platform.OS === 'ios' ? 50 : 30}px;
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
const LogoContainer = styled.View`
  align-items: center;
  margin-right: 16px;
  flex: 1;
  justify-content: center;
  margin-top: 10px;
`
const LogoTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${Platform.OS === 'ios' ? 16 : 10}px;
  color: ${({ theme }) => theme.colors.text_dark};
  text-align: center;
  margin-top: 6px;
`

export const ProfileScreen: React.FC<any> = ({}) => {
  const { user, signOut } = useAuth()
  const insets = useSafeAreaInsets()

  const sendServer = async () => {
    const response = await fetch('https://mvpcarrarapets.herokuapp.com/CreateUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type":'application/json'
      },
      body: JSON.stringify({
        name: user.name
      })
    })
    console.log('Response:', response)
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
            <ProfilePicture source={{ uri: user.photo }} />
          </ProfilePhotoContainer>
          <RatingAndNameContainer>
            <NameProfile>{user.fullName}</NameProfile>
            <RatingContainer>
              <StarIcon name={'star'} />
              <Rating>5.0</Rating>
            </RatingContainer>
          </RatingAndNameContainer>
        </ProfileInfoContainer>
        <InteractionButtons>
          <ProfileButton nameIcon="help-circle" label="Ajuda" />
          <ProfileButton nameIcon="card" label="Pagamento" />
          <ProfileButton nameIcon="compass" label="Viagens" />
        </InteractionButtons>
      </HeaderContainer>

      <DescriptionContainer>
        <ContainerButton>
          <ButtonInput onPress={handleGoToMapScreen}>
            <IconSearch name={'search'} />
            <LabelInputButton>Para onde vamos?</LabelInputButton>
          </ButtonInput>
        </ContainerButton>

        <MenuOptions>
          <ProfileMenuOptions
            label={'Perfil do Pet'}
            iconName={'dog-service'}
          />

          <ProfileMenuOptions label={'Mensagens'} iconName={'email'} />
          <ProfileMenuOptions label={'Configurações'} iconName={'cog'} />
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
