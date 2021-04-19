import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchAlbumsByUserId, fetchTodosByUserId, fetchUsers } from "./src/app/services/jsonplaceholder.service";

export default function App() {


    fetchUsers().then(users => {
        console.log('users : ', users);
    });

    fetchTodosByUserId(1).then(todos => {
        console.log('todos : ', todos);
    });

    fetchAlbumsByUserId(1).then(albums => {
        console.log('albums : ', albums);
    });

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
