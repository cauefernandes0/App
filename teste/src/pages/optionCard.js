import { StyleSheet, Text, TouchableWithoutFeedback, View, Image } from "react-native";
import { categories } from "../../constantes";
import { useState } from "react";
import { featured } from "../../constantes";
import { themeColors } from "../../index";
import { Bold } from "react-native-feather";
import React from "react";


export default function OptionCard({item}) {
    return (
        <TouchableWithoutFeedback>
            <View className='mr-6 bg-white rounded-3xl shadow-lg'>
            <Image style={{width:45, height:45,}} source={item.image} /> 
                <View className='px-3 pb-4x space-y-2'>
                    <Text className="text-lg font-bold pt-2">
                    {item.name}
                    </Text>

                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}