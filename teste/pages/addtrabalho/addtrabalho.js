import { StyleSheet, Text, View } from "react-native";

export default function Favorites () {
    return (
        <View styles ={styles.container}>
            <Text>PaginaTrabalho</Text>
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