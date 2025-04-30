// PARA INSTALAR:
// npm install react-test-renderer@18.2.0 --save-dev
// npm install @testing-library/react-native@12.2.0 --save-dev
// npx expo install jest-expo jest @types/jest --dev
// para correr: npm run test

// link de documentación de expo
// https://docs.expo.dev/develop/unit-testing/
// VAMOS A ESTAR USANDO JEST
// https://jestjs.io/


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [ cuenta, SetCuenta ] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Pruebita!</Text>
      <Text testID='cuenta'>{cuenta}</Text>
      <Button
        title="Incrementar"
        onPress={() => {
          SetCuenta(cuenta + 1);
        }} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

export function suma(a : number, b : number) {
  return a + b;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
