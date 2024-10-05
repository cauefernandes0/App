import { View, Text, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { themeColors } from './index';
import * as Icon from "react-native-feather";
import { featured } from './constantes';
import { useNavigation } from '@react-navigation/native';


export default function CartScreen(){
    const work = featured.options[0];
    const navigation = useNavigation();
    return(
        <View className="bg-white flex-1">
            {/*back button*/}
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity onPress={()=> navigation.goBack()}
                 style={{backgroundColor: themeColors.bgColor(1)}}
                className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'}/>
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Seu Carrinho</Text>
                    <Text className="text-center text-gray-500">{work.name}</Text>
                </View>
            </View>
            {/* Tempo de chegada */ }
            <View style={{backgroundColor: themeColors.bgColor(0.2)}}
            className="flex-row px-4 items-center">
                <Image source={require('./assets/imagens/womandrive.png')}
                className="w-20 h-20"></Image>

            </View>
        </View>
    )
}