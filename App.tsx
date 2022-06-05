import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';

import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito'

import AppLoading from 'expo-app-loading';
import { RootNavigation } from './src/navigation/_root';
import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  const { userStorageLoading } = useAuth()

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </ThemeProvider>
  );
}

