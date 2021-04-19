import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { configuration as api } from "./config";
import SearchBar from "./src/app/components/SearchBar";
import { fetchAPI } from "./src/app/utils/fetch";

export default function App() {
    const [searchText, setSearchText] = useState('');

    fetchAPI(api.endpoints.users).then(users => {
        console.log('users : ', users);
    });

    const getSearchedMovies = (searchedText) => {
        console.log('je chercher le user : ', searchedText);
    }

    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)}/>
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
