import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import { fetchAPI } from "../utils/helpers";
import Header from "../components/Header";
import Modal from "../components/Modal";
import MoreIcon from "../../../assets/More.png";


const PostDetails = ({ navigation, route }) => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [isCommentModelOpen, setIsCommentModelOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id, userId } = route.params;

    useEffect(() => {
        fetchAPI(`/posts/${id}`).then((post) => setPost(post));
        fetchAPI(`/posts/${id}/comments`).then((comments) => setComments(comments));
    }, [])

    const cleanStates = () => {
        setIsCommentModelOpen(false);
        setIsError(false);
    }
    const setNewComment = (newComment) => {
        if (!newComment) {
            setIsError(true);
            return;
        }
        const newTodos = [{ body: newComment, id, userId }, ...comments];
        setComments(newTodos);
        setIsCommentModelOpen(false);
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%', }}>
                <Header action={() => navigation.navigate("UserDetails", { id: userId })} title="Back to user"/>
                <View style={{ height: 80 }}/>
                <View style={{ alignContent: "center", width: '85%' }}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.body}</Text>
                </View>

                {isCommentModelOpen && (
                    <Modal
                        title="Post new comment"
                        action={(newComment) => setNewComment(newComment)}
                        close={() => cleanStates()}
                        placeholder="Enter new comment"
                        actionTitle="Validate"
                        isError={isError}
                    />
                )}

                <View style={styles.commentWrapper}>
                    <Text style={styles.title}>Comment</Text>
                    <TouchableOpacity onPress={() => setIsCommentModelOpen(true)} style={styles.moreIcon}>
                        <Image style={styles.icon} source={MoreIcon}/>
                    </TouchableOpacity>
                </View>

                {comments && comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
            </ScrollView>
        </View>
    );
}


const Comment = ({ comment }) => (
    <View style={styles.postWrapper}>
        <View style={styles.postContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10 }}>
                <Avatar source={{ uri: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png' }}/>
                <Text style={styles.text}>John Doe</Text>
            </View>
            <View>
                <Text style={{ paddingLeft: 10, paddingTop: 10, width: '100%', flex: 1 }} numberOfLines={2}>{comment.body}</Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
    },
    postWrapper: {
        // flex: 1,
        //alignItems: 'center',
        width: '100%',
        backgroundColor: '#F4F4F4',
    },
    commentWrapper: {
        // flex: 1,
        alignContent: "center",
        marginBottom: 20,
        marginTop: 20,
        width: '90%',
        backgroundColor: '#F4F4F4',
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
        height: 12,
        width: 12,
    },
    moreIcon: {
        maxWidth: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    postContainer: {
        flexDirection: 'column',
        padding: 20,
        marginBottom: 15,
        minHeight: 80,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 10,
        shadowColor: "#F4F4F4",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    text: {
        marginLeft: 10,
        fontWeight: 'bold'
    }
});

export default PostDetails;
