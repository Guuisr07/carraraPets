import * as React from 'react'
import { MapScreen } from '../../screens/MapScreen/MapScreen'
import { LoginScreen } from '../../screens/LoginScreen/LoginScreen'
import { FisrtSignUpScreen } from '../../screens/SignUp/FirstSignUpScreen'
import { SecondSignUpScreen } from '../../screens/SignUp/SecondSignUpScreen'
import { SuccessSignUpScreen } from '../../screens/SignUp/SuccessSignUpScreen'
import { ThirdSignUpScreen } from '../../screens/SignUp/ThirdSignUpScreen'
import { CheckoutScreen } from '../../screens/CheckoutScreen/CheckoutScreen'
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen'
import { FoundDriver } from '../../screens/FoundDriver/FoundDriver'
import { DriverProfile } from '../../screens/FoundDriver/DriverProfile'
import { HelpScreen } from '../../screens/HelpScreen/HelpScreen'
import { PaymentScreen } from '../../screens/PaymentScreen/PaymentScreen'
import { ListingPetsScreen } from '../../screens/ListingPetsScreen/ListingPetsScreen'
import { MessagesScreen } from '../../screens/MessagesScreen/MessagesScreen'
import { PaymentDescriptionScreen } from '../../screens/HelpScreen/PaymentDescriptionScreen'
import { ConfigScreen } from '../../screens/ConfigScreen/ConfigScreen'
import { MainStackScreenNames } from './mainStackScreenNames'
import { InitialAddPetScreen } from '../../screens/AddPet/InitialAddPetScreen'
import { UserTravelsScreen } from '../../screens/UserTravelsScreen/UserTravelsScreen'
import { RaceDetailsScreen } from '../../screens/HelpScreen/RaceDetailsScreen'
import { PartnerDriverScreen } from '../../screens/HelpScreen/PartnerDriverScreen'
import { TermsAndPrivacyScreen } from '../../screens/HelpScreen/TermsAndPrivacyScreen'
import { PaymentDescriptionQuest1Screen } from '../../screens/HelpScreen/HelpInformationScreen/PaymentDescriptionQuest1Screen'
import { PartnerDriverQuest1Screen } from '../../screens/HelpScreen/HelpInformationScreen/PartnerDriverQuest1Screen'
import { PaymentDescriptionQuest2Screen } from '../../screens/HelpScreen/HelpInformationScreen/PaymentDescriptionQuest2Screen'
import { PaymentDescriptionQuest3Screen } from '../../screens/HelpScreen/HelpInformationScreen/PaymentDescriptionQuest3Screen'
import { PaymentDescriptionQuest4Screen } from '../../screens/HelpScreen/HelpInformationScreen/PaymentDescriptionQuest4Screen'
import { RaceDetailsQuest1Screen } from '../../screens/HelpScreen/HelpInformationScreen/RaceDetailsQuest1Screen'
import { RaceDetailsQuest2Screen } from '../../screens/HelpScreen/HelpInformationScreen/RaceDetailsQuest2Screen'
import { RaceDetailsQuest3Screen } from '../../screens/HelpScreen/HelpInformationScreen/RaceDetailsQuest3Screen'
import { RaceDetailsQuest4Screen } from '../../screens/HelpScreen/HelpInformationScreen/RaceDetailsQuest4Screen'
import { RaceDetailsQuest5Screen } from '../../screens/HelpScreen/HelpInformationScreen/RaceDetailsQuest5Screen'
import { RaceDetailsQuest6Screen } from '../../screens/HelpScreen/HelpInformationScreen/RaceDetailsQuest6Screen'


export const ScreensMainStack = 'screens.main.stack'

const MainStack = (Stack: any) => [
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.ProfileScreen}`}
    name={MainStackScreenNames.ProfileScreen}
    component={ProfileScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.MapScreen}`}
    name={MainStackScreenNames.MapScreen}
    component={MapScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.LoginScreen}`}
    name={MainStackScreenNames.LoginScreen}
    component={LoginScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.DriverProfile}`}
    name={MainStackScreenNames.DriverProfile}
    component={DriverProfile}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.FoundDriver}`}
    name={MainStackScreenNames.FoundDriver}
    component={FoundDriver}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.CheckoutScreen}`}
    name={MainStackScreenNames.CheckoutScreen}
    component={CheckoutScreen}
  />,

  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.FisrtSignUpScreen}`}
    name={MainStackScreenNames.FisrtSignUpScreen}
    component={FisrtSignUpScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.SecondSignUpScreen}`}
    name={MainStackScreenNames.SecondSignUpScreen}
    component={SecondSignUpScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.ThirdSignUpScreen}`}
    name={MainStackScreenNames.ThirdSignUpScreen}
    component={ThirdSignUpScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.SuccessSignUpScreen}`}
    name={MainStackScreenNames.SuccessSignUpScreen}
    component={SuccessSignUpScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.HelpScreen}`}
    name={MainStackScreenNames.HelpScreen}
    component={HelpScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PaymentScreen}`}
    name={MainStackScreenNames.PaymentScreen}
    component={PaymentScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.ListingPetsScreen}`}
    name={MainStackScreenNames.ListingPetsScreen}
    component={ListingPetsScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.MessagesScreen}`}
    name={MainStackScreenNames.MessagesScreen}
    component={MessagesScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PaymentDescriptionScreen}`}
    name={MainStackScreenNames.PaymentDescriptionScreen}
    component={PaymentDescriptionScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.ConfigScreen}`}
    name={MainStackScreenNames.ConfigScreen}
    component={ConfigScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.InitialAddPetScreen}`}
    name={MainStackScreenNames.InitialAddPetScreen}
    component={InitialAddPetScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.UserTravelsScreen}`}
    name={MainStackScreenNames.UserTravelsScreen}
    component={UserTravelsScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.RaceDetailsScreen}`}
    name={MainStackScreenNames.RaceDetailsScreen}
    component={RaceDetailsScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PartnerDriverScreen}`}
    name={MainStackScreenNames.PartnerDriverScreen}
    component={PartnerDriverScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.TermsAndPrivacyScreen}`}
    name={MainStackScreenNames.TermsAndPrivacyScreen}
    component={TermsAndPrivacyScreen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PaymentDescriptionQuest1Screen}`}
    name={MainStackScreenNames.PaymentDescriptionQuest1Screen}
    component={PaymentDescriptionQuest1Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PartnerDriverQuest1Screen}`}
    name={MainStackScreenNames.PartnerDriverQuest1Screen}
    component={PartnerDriverQuest1Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PaymentDescriptionQuest2Screen}`}
    name={MainStackScreenNames.PaymentDescriptionQuest2Screen}
    component={PaymentDescriptionQuest2Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PaymentDescriptionQuest3Screen}`}
    name={MainStackScreenNames.PaymentDescriptionQuest3Screen}
    component={PaymentDescriptionQuest3Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.PaymentDescriptionQuest4Screen}`}
    name={MainStackScreenNames.PaymentDescriptionQuest4Screen}
    component={PaymentDescriptionQuest4Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.RaceDetailsQuest1Screen}`}
    name={MainStackScreenNames.RaceDetailsQuest1Screen}
    component={RaceDetailsQuest1Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.RaceDetailsQuest2Screen}`}
    name={MainStackScreenNames.RaceDetailsQuest2Screen}
    component={RaceDetailsQuest2Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.RaceDetailsQuest3Screen}`}
    name={MainStackScreenNames.RaceDetailsQuest3Screen}
    component={RaceDetailsQuest3Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.RaceDetailsQuest4Screen}`}
    name={MainStackScreenNames.RaceDetailsQuest4Screen}
    component={RaceDetailsQuest4Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.RaceDetailsQuest5Screen}`}
    name={MainStackScreenNames.RaceDetailsQuest5Screen}
    component={RaceDetailsQuest5Screen}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.RaceDetailsQuest6Screen}`}
    name={MainStackScreenNames.RaceDetailsQuest6Screen}
    component={RaceDetailsQuest6Screen}
  />,




]

export default MainStack
