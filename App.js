import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserList from './src/app/components/UserList';
import {fetchAPI} from './src/app/utils/fetch';
import {configuration as config} from './config/index.js';

export default function App() {
    const user = fetchAPI(config.endpoints.users);
    return (
        <View style={styles.container}>
            <UserList data={user}/>
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
