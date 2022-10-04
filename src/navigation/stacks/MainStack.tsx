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
]

export default MainStack
