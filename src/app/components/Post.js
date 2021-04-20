import React from 'react';
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Icon } from "react-native-elements";


export const Post = ({ post }) => {

    return (
        <View style={styles.main_container}>
            <View style={styles.postContainer}>
                <Text style={styles.text}>{post.title}</Text>
                <Icon name='keyboard-arrow-right' size={30}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        width: '85%',
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 12
    },
    text: {
        fontSize: 20,
        marginLeft: 12
    },
    postContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderWidth: 1,
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
    }
})
