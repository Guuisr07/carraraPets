import React from 'react'
import { NavigationContainerRef, StackActions } from '@react-navigation/native'

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef()

export class Navigation {
  static navigate(
    to: string,
    params?: { [key: string]: string | number | object }
  ) {
    navigationRef.current?.navigate(to, params)
  }
  static replace(to: string, params?: { [key: string]: string | number }) {
    navigationRef.current?.dispatch(StackActions.replace(to, params))
  }
  static goBack() {
    navigationRef.current?.canGoBack() && navigationRef.current?.goBack()
  }
}
