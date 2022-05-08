import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';

import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito'

import { InitialAppScreen } from './src/screens/InitialAppScreen/InitialAppScreen';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <InitialAppScreen />
    </ThemeProvider>
  );
}

