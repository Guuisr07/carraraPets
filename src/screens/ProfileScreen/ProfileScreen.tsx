import React from 'react'
import { Feather, AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { useAuth } from '../../hooks/auth'
import { TouchableOpacity } from 'react-native'
import { Coordinator } from '../../navigation/coordinator/coordinator'

const StyledContainer = styled.SafeAreaView`
  flex: 1;
`
const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const BackIcon = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-top: 20px;
  margin-left: 16px;
`
const ProfilePicture = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 3px;
  border-color: white;
`
const ProfileImageContainer = styled.View`
  align-items: center;
`
const NameProfile = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 8px;
`
const RatingAndNameContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StarIcon = styled<any>(Feather)`
  font-size: 16px;
  color: black;
  margin-left: 16px;
`

const Rating = styled.Text`
  margin-left: 8px;
`

export const ProfileScreen: React.FC<any> = ({}) => {
  const { user } = useAuth()

  return (
    <StyledContainer>
      <HeaderContainer>
        <TouchableOpacity onPress={() => Coordinator.goBack()}>
          <BackIcon name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>

      <ProfileImageContainer>
        <ProfilePicture source={{ uri: user.photo }} />
        <RatingAndNameContainer>
          <NameProfile>{user.name}</NameProfile>
          <RatingContainer>
            <StarIcon name={'star'} />
            <Rating>4.8</Rating>
          </RatingContainer>
        </RatingAndNameContainer>
      </ProfileImageContainer>
    </StyledContainer>
  )
}
