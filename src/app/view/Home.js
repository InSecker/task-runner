import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { configuration as api } from "../../../config";
import SearchBar from "../components/SearchBar";
import { fetchAPI } from "../utils/fetch";
import { Map } from "../components/Map";

const Home = () => {
    const [ searchText, setSearchText ] = useState("");
    const [ users, setUsers ] = useState([]);

    const fetchUsers = () => {
        fetchAPI(api.endpoints.users).then((users) => {
            setUsers(users);
        });
    };

    const getSearchedMovies = (searchedText) => {
        console.log("je chercher le user : ", searchedText);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={StyleSheet.absoluteFillObject}>
                <View style={styles.container}>
                    <Map style={{ flex: 1 }} users={users}/>
                    <StatusBar style="auto"/>
                    <SearchBar
                        style={styles.searchbar}
                        searchText={searchText}
                        onSearch={(searchedText) => getSearchedMovies(searchedText)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    searchbar: {
        position: "absolute",
    },
});

export default Home;
