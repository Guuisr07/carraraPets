import * as React from 'react'
import { NavigationContainer as NativeContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './stacks/MainStack'
import { navigationRef } from './coordinator/navigationService'
import { useAuth } from '../hooks/auth'
import AuthStack from './stacks/AuthStack'

const Stack = createNativeStackNavigator()

//TODO: add isLogged validation for AuthStack
export const RootNavigation = () => {
  const { user } = useAuth()

  return (
    <NativeContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NativeContainer>
  )
}
