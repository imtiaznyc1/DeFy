import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './home'
import InvestmentScreen from './investment'

export default function App() {
 
    return (
      //<View style={styles.container}>
        //<Text>Open up App.js to start working on your app!</Text>
        //<StatusBar style="auto" />
      //</View>
      <View>
        <HomeScreen />
        <InvestmentScreen />
      </View>
      
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
