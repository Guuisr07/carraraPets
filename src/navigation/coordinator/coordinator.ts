import { MainStackScreenNames } from "../stacks/MainStack"
import { Navigation } from "./navigationService"

export class Coordinator {
  static goBack() {
    Navigation.goBack()
  }
  // Main Stack
  static goToInitialAppScreen() {
    Navigation.replace(MainStackScreenNames.InitialAppScreen)
  }
  static goToLoginScreen() {
    Navigation.navigate(MainStackScreenNames.LoginScreen)
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