import { View, Text, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import { themeColors } from './index';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from './src/pages/slices/optionSlice';
import { emptyCart } from './src/pages/slices/cartSlice';
import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import { urlFor } from './sanity';



export default function Delivery(){
    
    const work = useSelector(selectOption);

    const navigation = useNavigation();
    const dispatch= useDispatch();
    const cancelOrder= ()=>{
       navigation.navigate('Home');
        dispatch(emptyCart());
    }
    
    return(
        <View className="flex-1">
            {/*map view*/}
            <MapView initialRegion={{
                latitude: work.lat,
                longitude: work.lnt,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            className="flex-1"
            mapType='standard'
            >
                <Marker coordinate={{
                     latitude: work.lat,
                     longitude: work.lnt,
                }}
                title={work.name}
                description={work.description}
                pinColor={themeColors.bgColor(1)}
                />                
            </MapView>
            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">
                            Tempo Estimado</Text>
                        <Text className="text-3xl font-extrabold text-gray-700">
                            20-30 Minutos
                        </Text>
                        <Text className="mt-2 text-gray-700 font-semibold">
                            Sua prestadora de serviço está a caminho!
                        </Text>
                    </View>
                    <Image className="w-24 h-24" source={require("./assets/imagens/womanbike.gif")}/>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(0.8)}}
                className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">   
                    <View className="p-1 rounded-full"
                    style={{backgroundColor: 'rgba(255,255,255,0.4)'}}>
                        <Image className="h-16 w-16 rounded-full"
                        source={{uri: urlFor(work.image).url()}}/>
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-lg font-bold text-white">{work.name}</Text>
                        <Text className="font-semibold text-white">Sua Prestadora</Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1} stroke={themeColors.bgColor(1)}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={cancelOrder}
                         className="bg-white p-2 rounded-full">
                            <Icon.X fill={themeColors.bgColor(1)} strokeWidth={4} stroke= 'red'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}