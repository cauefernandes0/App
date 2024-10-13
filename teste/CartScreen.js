import { View, Text, TouchableOpacity,Image, ScrollView} from 'react-native';
import React from 'react';
import { themeColors } from './index';
import * as Icon from "react-native-feather";
import { featured } from './constantes';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from './src/pages/slices/optionSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from './src/pages/slices/cartSlice';
import { useEffect, useState} from 'react';

export default function CartScreen(){
    const work = useSelector(selectOption);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const dispatch = useDispatch();
    const frete = 10;
    const [groupedItems, setGroupedItems] = useState({})

    useEffect(()=>{
        const items = cartItems.reduce((group,item)=>{
            if (group[item.id]){
                group[item.id].push(item)
            }else{
                group[item.id] = [item]
            }
            return group;
        },{})
        setGroupedItems(items)
    },[cartItems])

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
                <Text className='flex-1 pl-4'>Chegada em 20-30 minutos</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{color:themeColors.text}}>Modificar</Text>
                </TouchableOpacity>
            </View>
             {/*Trabalhos*/}
             <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:50}}
            className="bg-white pt-5">
                {
                    Object.entries(groupedItems).map(([key,items])=> {
                        let dish = items[0];

                        return(
                            <View key={key}
                            className="flex-row items-center space-x-3 py-2 px-4 rounded-3xl mx-2 mb-3 shadow-md"
                            style={{backgroundColor: "#f2f2f2"}}>
                            <Text className='font-bold' style={{color: themeColors.text}}>
                                {items.length} x
                            </Text>
                            <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                            <Text className="font-semibold text-base">R${dish.price}</Text>
                            <TouchableOpacity 
                                onPress ={()=> dispatch(removeFromCart({id: dish.id}))}
                                className="p-1 rounded-full"
                                style={{backgroundColor: themeColors.bgColor(1)}}>
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>
                            </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* totais*/}
            <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">R${cartTotal}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Distância</Text>
                    <Text className="text-gray-700">R${frete}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-extrabold">Total</Text>
                    <Text className="text-gray-700 font-extrabold">R${cartTotal + frete}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('OrderPreparing')}
                     style={{backgroundColor: themeColors.bgColor(1)}}
                    className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-lg">Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}