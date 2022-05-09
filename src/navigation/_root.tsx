import * as React from 'react'
import { NavigationContainer as NativeContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './stacks/MainStack'
import { navigationRef } from './coordinator/navigationService'


const Stack = createNativeStackNavigator()

//TODO: add isLogged validation for AuthStack
export const RootNavigation = () => {
  return (
    <NativeContainer ref={navigationRef}>
      <Stack.Navigator>
        {MainStack(Stack)}
     
      </Stack.Navigator>
    </NativeContainer>
  )
}
