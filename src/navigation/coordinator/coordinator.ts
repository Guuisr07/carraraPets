import { AuthStackScreenNames } from "../stacks/AuthStack"
import { MainStackScreenNames } from "../stacks/mainStackScreenNames"
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
  static goToProfileScreen() {
    Navigation.navigate(MainStackScreenNames.ProfileScreen)
  }
  static goToDriverProfile(params?: Record<string, any>) {
    Navigation.replace(MainStackScreenNames.DriverProfile, params)
  }
  static goToFoundDriver(params?: Record<string, any>) {
    Navigation.navigate(MainStackScreenNames.FoundDriver, params)
  }
  static goToMapScreen() {
    Navigation.navigate(MainStackScreenNames.MapScreen)
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
  static goToHelpScreen() {
    Navigation.navigate(MainStackScreenNames.HelpScreen)
  }
  static goToPaymentScreen() {
    Navigation.navigate(MainStackScreenNames.PaymentScreen)
  }
  static goToListingPetsScreen() {
    Navigation.navigate(MainStackScreenNames.ListingPetsScreen)
  }
  static goToMessagesScreen() {
    Navigation.navigate(MainStackScreenNames.MessagesScreen)
  }
  static goToPaymentDescriptionScreen() {
    Navigation.navigate(MainStackScreenNames.PaymentDescriptionScreen)
  }
  static goToConfigScreen() {
    Navigation.navigate(MainStackScreenNames.ConfigScreen)
  }
  static goToInitialAddPetScreen() {
    Navigation.navigate(MainStackScreenNames.InitialAddPetScreen)
  }
}