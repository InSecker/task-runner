import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import userIco from "../../../assets/Users.svg";

const UserCard = ({ data }) => {

    console.log(data)
    const { name } = data;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={userIco}/>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "20%",
        height: 130,
        marginLeft: 4,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: "auto",
        marginRight: "auto"
    },
    text: {
        textAlign: "center"
    }
});

export default UserCard;
