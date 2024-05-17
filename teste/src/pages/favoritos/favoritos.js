import { StyleSheet, Text, View } from "react-native";

export default function Favoritos () {
    return (
        <View styles ={styles.container}>
            <Text>Paginas Favoritos</Text>
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