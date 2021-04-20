import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import UserCard from "./UserCard";

const UserList = ({ data }) => {
    return (
        <ScrollView horizontal={true} style={{ backgroundColor: 'green', height: 50}}>
            <View style={{ flexDirection: 'row', backgroundColor: 'red', height: 150}}>
                {data && data.map((user, i) => <UserCard data={user} key={i}/>)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'red',
        //position: "absolute",
        //bottom: "5%",
        //left: "2%",
        //height: 150
    },
});

export default UserList;
