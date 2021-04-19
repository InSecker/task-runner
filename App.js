import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { configuration as api } from "./config";
import SearchBar from "./src/app/components/SearchBar";
import { fetchAPI } from "./src/app/utils/fetch";
import Map from "./src/app/components/Map";


export default function App() {
    const [ searchText, setSearchText ] = useState('');

    fetchAPI(api.endpoints.users).then(users => {
        console.log('users : ', users);
    });

    const getSearchedMovies = (searchedText) => {
        console.log('je chercher le user : ', searchedText);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Map/>
                <SearchBar style={styles.searchbar} searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)}/>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchbar: {
        // position: 'absolute'
    }
});
