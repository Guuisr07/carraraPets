import React from 'react'
import { InitialAppScreen } from '../../screens/InitialAppScreen/InitialAppScreen'

export const ScreensMainStack = 'screens.main.stack'

export const AuthStackScreenNames = {
  InitialAppScreen: 'InitialAppScreen',
  
}

const AuthStack = (Stack: any) => [
  <Stack.Screen
    key={`${ScreensMainStack}${AuthStackScreenNames.InitialAppScreen}`}
    name={AuthStackScreenNames.InitialAppScreen}
    component={InitialAppScreen}
    options={{
      headerShown: false,
    }}
  />,
]

export default AuthStack