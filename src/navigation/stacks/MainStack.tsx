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

export const ScreensMainStack = 'screens.main.stack'

export const MainStackScreenNames = {
  MapScreen: 'MapScreen',
  DriverProfile: 'DriverProfile',
  FoundDriver: 'FoundDriver',
  MainScreen: 'MainScreen',
  LoginScreen: 'LoginScreen',
  FisrtSignUpScreen: 'FisrtSignUpScreen',
  SecondSignUpScreen: 'SecondSignUpScreen',
  ThirdSignUpScreen: 'ThirdSignUpScreen',
  SuccessSignUpScreen: 'SuccessSignUpScreen',
  CheckoutScreen: 'CheckoutScreen',
  ProfileScreen: 'ProfileScreen',
  HelpScreen: 'HelpScreen',
  PaymentScreen: 'PaymentScreen',
  ListingPetsScreen: 'ListingPetsScreen',
  MessagesScreen: 'MessagesScreen',
}

const MainStack = (Stack: any) => [
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.ProfileScreen}`}
    name={MainStackScreenNames.ProfileScreen}
    component={ProfileScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.MapScreen}`}
    name={MainStackScreenNames.MapScreen}
    component={MapScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.LoginScreen}`}
    name={MainStackScreenNames.LoginScreen}
    component={LoginScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.DriverProfile}`}
    name={MainStackScreenNames.DriverProfile}
    component={DriverProfile}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.FoundDriver}`}
    name={MainStackScreenNames.FoundDriver}
    component={FoundDriver}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.CheckoutScreen}`}
    name={MainStackScreenNames.CheckoutScreen}
    component={CheckoutScreen}
    options={{
      headerShown: false,
    }}
  />,
  
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.FisrtSignUpScreen}`}
    name={MainStackScreenNames.FisrtSignUpScreen}
    component={FisrtSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.SecondSignUpScreen}`}
    name={MainStackScreenNames.SecondSignUpScreen}
    component={SecondSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.ThirdSignUpScreen}`}
    name={MainStackScreenNames.ThirdSignUpScreen}
    component={ThirdSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.SuccessSignUpScreen}`}
    name={MainStackScreenNames.SuccessSignUpScreen}
    component={SuccessSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
  key={`${ScreensMainStack}${MainStackScreenNames.HelpScreen}`}
  name={MainStackScreenNames.HelpScreen}
  component={HelpScreen}
  options={{
    headerShown: false,
  }}
/>,
 <Stack.Screen
 key={`${ScreensMainStack}${MainStackScreenNames.PaymentScreen}`}
 name={MainStackScreenNames.PaymentScreen}
 component={PaymentScreen}
 options={{
   headerShown: false,
 }}
/>,
<Stack.Screen
 key={`${ScreensMainStack}${MainStackScreenNames.ListingPetsScreen}`}
 name={MainStackScreenNames.ListingPetsScreen}
 component={ListingPetsScreen}
 options={{
   headerShown: false,
 }}
/>,
<Stack.Screen
 key={`${ScreensMainStack}${MainStackScreenNames.MessagesScreen}`}
 name={MainStackScreenNames.MessagesScreen}
 component={MessagesScreen}
 options={{
   headerShown: false,
 }}
/>,
]

export default MainStack
