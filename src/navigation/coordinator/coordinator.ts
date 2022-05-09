import { MainStackScreenNames } from "../stacks/MainStack"
import { Navigation } from "./navigationService"

export class Coordinator {
  static goBack() {
    Navigation.goBack()
  }
  // Main Stack
  static goToTestComponentsScreen() {
    Navigation.replace(MainStackScreenNames.InitialAppScreen)
  }
  static goToLoginScreen() {
    Navigation.navigate(MainStackScreenNames.LoginScreen)
  }
}