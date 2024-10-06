import { NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from  "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import OptionScreen from './OptionScreen';
import CartScreen from './CartScreen';
import OrderPreparingScreen from './OrderPreparingScreen'
import DeliveryScreen from './DeliveryScreen'

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Option" component={OptionScreen}/>
                <Stack.Screen name='Cart'options={{presentation: 'modal'}} component={CartScreen}/>
                <Stack.Screen name='OrderPreparing'options={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen}/>
                <Stack.Screen name='Delivery'options={{presentation: 'fullScreenModal'}} component={DeliveryScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}