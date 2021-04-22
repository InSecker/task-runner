import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Icon } from "react-native-elements";

const Post = ({ post, navigation, userId }) => {
    return (
        <TouchableHighlight
            onPress={() => navigation.navigate("PostDetails", { id: post.id, userId })}
            underlayColor={"transparent"}>
            <View style={styles.main_container}>
                <View style={styles.postContainer}>
                    <Text style={styles.text}>{post.title}</Text>
                    <Icon name="keyboard-arrow-right" size={30}/>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    main_container: {
        width: "100%",
    },
    title: {
        // fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 26,
        marginBottom: 12,
    },
    text: {
        width: "80%",
        fontSize: 16,
        marginLeft: 12,
        textAlign: "left",
    },
    postContainer: {
        flexDirection: "row",
        width: "100%",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#fff",
        backgroundColor: "#fff",
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
    },
});

export default Post;
