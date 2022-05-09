import * as React from 'react'
import { InitialAppScreen } from '../../screens/InitialAppScreen/InitialAppScreen'
import { LoginScreen } from '../../screens/LoginScreen/LoginScreen'


export const ScreensMainStack = 'screens.main.stack'

export const MainStackScreenNames = {
  InitialAppScreen: 'InitialAppScreen',
  MainScreen: 'MainScreen',
  LoginScreen: 'LoginScreen',
}

const MainStack = (Stack: any) => [
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.InitialAppScreen}`}
    name={MainStackScreenNames.InitialAppScreen}
    component={InitialAppScreen}
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
]

export default MainStack