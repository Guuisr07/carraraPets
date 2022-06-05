import * as React from 'react'
import { InitialAppScreen } from '../../screens/InitialAppScreen/InitialAppScreen'
import { LoginScreen } from '../../screens/LoginScreen/LoginScreen'
import { FisrtSignUpScreen } from '../../screens/SignUp/FirstSignUpScreen'
import { SecondSignUpScreen } from '../../screens/SignUp/SecondSignUpScreen'
import { SuccessSignUpScreen } from '../../screens/SignUp/SuccessSignUpScreen'
import { ThirdSignUpScreen } from '../../screens/SignUp/ThirdSignUpScreen'


export const ScreensMainStack = 'screens.main.stack'

export const MainStackScreenNames = {
  MainScreen: 'MainScreen',
  LoginScreen: 'LoginScreen',
  FisrtSignUpScreen: 'FisrtSignUpScreen',
  SecondSignUpScreen: 'SecondSignUpScreen',
  ThirdSignUpScreen: 'ThirdSignUpScreen',
  SuccessSignUpScreen: 'SuccessSignUpScreen',
}

const MainStack = (Stack: any) => [
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.LoginScreen}`}
    name={MainStackScreenNames.LoginScreen}
    component={LoginScreen}
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
]

export default MainStack