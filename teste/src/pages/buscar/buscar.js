import { StyleSheet, Text, View } from "react-native";

export default function Buscar () {
    return (
        /* Barra de pesquisa */
        <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-30">
              <Icon.Search height="25" width="25" stroke="gray"/>
              <TextInput placeholder='Trabalhos' className="ml-2 flex-1"/>
              <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2- border-l-gray-300"/>
                <Icon.MapPin height="20" width="20" stroke="gray" />
                <Text className="text-gray-600">São Paulo, SP</Text>

            </View>
            <View className="p-3 bg-gray-300 rounded-full">
                <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
            </View>
          </View>
          
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});