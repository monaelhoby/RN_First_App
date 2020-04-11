
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/routes'

export default function App() {
  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
