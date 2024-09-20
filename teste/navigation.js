import { NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from  "@react-navigation/native-stack";
const stack = createNativeStackNavigator();
import { View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import OptionScreen from './OptionScreen';

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Option" component={OptionScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}