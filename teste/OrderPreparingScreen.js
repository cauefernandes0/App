import { View, Text, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';


export default function OrderPreparing(){
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            //mover para a screen de delivery
            navigation.navigate('Delivery')
        }, 3000)
    })
    return(
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require("./assets/imagens/womanarrive.gif")} className="h-60 w-60"/>
        </View>
    )
}