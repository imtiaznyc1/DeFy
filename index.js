import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { creatNativeStackNavigator} from '@react-navigation/native-stack'
import {HomeScreen} from home.js

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = "Home"
                    component = {HomeScreen}
                />
                <Stack.Screen
                    name = "Investment"
                    component = {InvestmentScreen}
                />
                <Stack.Screen name = "Loans" component = {ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


