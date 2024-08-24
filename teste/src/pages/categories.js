import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categories } from "../../constantes";


export default function Categories () {
    return (
        <View className="mt-4">
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            >
            {
                categories.map((category, index)=>{
                    return(
                        <View key={index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity className ="p-1 rounded-full shadow bg-gray-200"  >
                                <Image style={{width:45, height:45,}}
                                source={category.image} />
                                <Text className>{category.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            </ScrollView>
        </View>
    );
}
