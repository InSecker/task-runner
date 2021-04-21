import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { configuration as api } from "../../../config";
import { Icon } from "react-native-elements";


const PostDetails = ({ navigation, route }) => {
    const [ post, setPost ] = useState({});
    const [ comments, setComments ] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then((post) => {
                setPost(post[5])
            });

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                console.log('comments : ', comments);
                setComments(comments);
            });
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.postWrapper}>
                <Text style={styles.title}>T{post.title}</Text>
                <Text>{post.body}</Text>
            </View>

            <View style={styles.commentWrapper}>
                <Text style={styles.title}>Comment</Text>
                <View style={styles.icon}>
                    <Text style={{ fontSize: 20 }}>+</Text>
                </View>
            </View>

            {comments && comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
        </View>
    );
}


const Comment = ({ comment }) => (
    <View style={styles.postWrapper}>
        <View style={styles.postContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flex: 1, alignItems: 'center' }}>
                <Icon name='person' size={30}/>
                <Text style={styles.text}>John Doe</Text>
            </View>
            <View>
                <Text>{comment.body.slice(0, 50)}</Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    postWrapper: {
        flex: 1,
        width: '90%',
        margin: 'auto',
        backgroundColor: 'white'
    },
    commentWrapper: {
        flex: 1,
        marginTop: 20,
        width: '90%',
        margin: 'auto',
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 26,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    icon: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#fff",
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
    postContainer: {
        flexDirection: 'column',
        padding: 10,
        height: 100,
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
    },
    text: {
        marginLeft: 10
    }
});

export default PostDetails;
