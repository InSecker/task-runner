import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { configuration as api } from "./config";
import { SearchBar } from "./src/app/components/SearchBar";
import { fetchAPI } from "./src/app/utils/fetch";
import { Map } from "./src/app/components/Map";
import UserList from "./src/app/components/UserList";


export const App = () => {
    const [ searchText, setSearchText ] = useState('');
    const [ users, setUsers ] = useState([]);

    const getSearchedMovies = (searchedText) => {
        console.log('je chercher le user : ', searchedText);
    }

    useEffect(() => {
        fetchAPI(api.endpoints.users).then(result => setUsers(result))
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={StyleSheet.absoluteFillObject}>
                <View style={styles.container}>
                    <Map users={users} style={{ flex: 1 }}/>
                    <StatusBar style="auto"/>
                    <SearchBar style={styles.searchbar} searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)}/>
                    <UserList data={users}/>
                </View>
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
        position: 'absolute'
    }
});

export default App;
