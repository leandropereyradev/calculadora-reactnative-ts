import React from 'react';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={styles.containerApp}>
      <StatusBar backgroundColor="black" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};
