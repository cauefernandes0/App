import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform } from "react-native";
const statusBarHeight = StatusBar.currentHeight;

export default function Home(){
    return (
        <SafeAreaView style={styles.content}>

        <ScrollView>

            <View styles={styles.content}>
            <Text>Conteúdo</Text>
            </View>

            <View styles={styles.content}>
            <Text>Conteúdo</Text>
            </View>

            <View styles={styles.content}>
            <Text>Conteúdo</Text>
            </View>

            <View styles={styles.content}>
            <Text>Conteúdo</Text>
            </View>

            <View styles={styles.content}>
            <Text>Conteúdo</Text>
            </View>

        </ScrollView>

        </SafeAreaView>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
    },
    content:{
        alignSelf: 'center',
        flex:1,
        width:'98%',
        height: 120,
        marginBottom:20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
})