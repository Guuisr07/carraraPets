import React from 'react'
import { InitialAppScreen } from '../../screens/InitialAppScreen/InitialAppScreen'

export const ScreensMainStack = 'screens.main.stack'

export const MainStackScreenNames = {
  InitialAppScreen: 'InitialAppScreen',
  
}

const AuthStack = (Stack: any) => [
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.InitialAppScreen}`}
    name={MainStackScreenNames.InitialAppScreen}
    component={InitialAppScreen}
    options={{
      headerShown: false,
    }}
  />,
]

export default AuthStack