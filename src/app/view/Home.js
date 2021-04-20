import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { configuration as api } from "../../../config";
import { fetchAPI } from "../utils/fetch";
import { Map } from "../components/Map";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";

const Home = ({ navigation }) => {
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
        <View style={styles.container}>
            <Map style={{ flex: 1, backgroundColor: 'red' }} users={users}/>
            <StatusBar style="auto"/>
            <Button title="Afficher un utilisateur" onPress={() => navigation.navigate('UserDetails', { id: 1 })}/>
            <SearchBar searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)}/>
            <UserList users={users} navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "flex-end",
    }
});

export default Home;
