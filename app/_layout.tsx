import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { GastosProvider } from '@/src/context/GastosContext';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GastosProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ title: 'Controle de Gastos' }} 
          />
          <Stack.Screen 
            name="formulario" 
            options={{ title: 'Novo Gasto' }} 
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GastosProvider>
  );
}
