import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserList from './src/app/components/UserList';
import {fetchAPI} from './src/app/utils/fetch';
import {configuration as config} from './config/index.js';

export default function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchAPI(config.endpoints.users).then(result => setData(result))
    }, [])



    return (
        <View style={styles.container}>
            {data && <UserList data={data}/> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
