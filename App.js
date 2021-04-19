import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoCard from './src/app/components/TodoCard';
import TodoList from './src/app/components/TodoList';
import TodoMore from './src/app/components/TodoMore';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <TodoMore/>
            <TodoList/>
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
