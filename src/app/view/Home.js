import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { configuration as api } from "../../../config";
import { fetchAPI } from "../utils/helpers";
import Map from "../shared/Map";
import UserList from "../components/UserList";
import SearchBar from "../shared/SearchBar";

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetchAPI(api.endpoints.users).then((users) => {
            setUsers(users);
        });
    };

    const searchUser = (searchedText) => {
        const searchedUser = users.filter(user => user.name.indexOf(searchedText) !== -1)

        console.log('searchedUser : ', searchedUser);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
            <Map style={{ flex: 1, backgroundColor: 'red' }} users={users}/>
            <StatusBar style="auto"/>
            <SearchBar
                searchText={searchText}
                onSearch={(searchedText) => searchUser(searchedText)}
            />
            <UserList navigation={navigation} users={users}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    },
});

export default Home;
