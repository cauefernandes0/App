import { StyleSheet, Text, View } from "react-native";

export default function Notificacao () {
    return (
        <View styles ={styles.container}>
            <Text>Pagina Notificação</Text>
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