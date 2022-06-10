import { AuthStackScreenNames } from "../stacks/AuthStack"
import { MainStackScreenNames } from "../stacks/MainStack"
import { Navigation } from "./navigationService"

export class Coordinator {
  static goBack() {
    Navigation.goBack()
  }
  // Auth Stack
  static goToInitialAppScreen() {
    Navigation.replace(AuthStackScreenNames.InitialAppScreen)
  }
  // Main Stack
  static goToLoginScreen() {
    Navigation.navigate(MainStackScreenNames.LoginScreen)
  }
  static goToCheckoutScreen(params?: Record<string, any>) {
    Navigation.navigate(MainStackScreenNames.CheckoutScreen, params)
  }
  static goToFisrtSignUpScreen() {
    Navigation.navigate(MainStackScreenNames.FisrtSignUpScreen)
  }
  static goToSecondSignUpScreen() {
    Navigation.navigate(MainStackScreenNames.SecondSignUpScreen)
  }
  static goToThirdSignUpScreen() {
    Navigation.navigate(MainStackScreenNames.ThirdSignUpScreen)
  }
}