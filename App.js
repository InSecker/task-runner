import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { configuration as api} from './config';
import TodoList from './src/app/components/TodoList';
import {fetchAPI} from './src/app/utils/fetch';


export default function App() {

    const [data, setData] = useState(null);

    console.log(api.endpoints.todos);

    useEffect(() => {
        fetchAPI('/users/1/todos').then(result => setData(result))
    }, []);



    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {data && <TodoList data={data}/> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
