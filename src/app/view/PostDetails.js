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
            <ScrollView style={styles.scrollview}>
                <Header action={() => navigation.navigate("UserDetails", { id: userId })} title="Back to user"/>
                <View style={styles.maincontainer}>
                    <View style={styles.commentsTitle}>
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
                    {comments &&
                        comments.map((comment, i) => (
                            <View style={styles.allComments} key={i}>
                                <Comment comment={comment}/>
                            </View>
                        ))}
                </View>
            </ScrollView>
        </View>
    );
}


const Comment = ({ comment }) => (
    <View style={styles.postWrapper}>
        <View style={styles.postContainer}>
            <View style={styles.infoContainer}>
                <Avatar source={{ uri: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png' }}/>
                <Text style={styles.text}>John Doe</Text>
            </View>
            <View style={styles.commentContainer}>
                <Text style={styles.commentText} numberOfLines={2}>{comment.body}</Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        alignContent: "center",
        backgroundColor: '#F4F4F4',
    },
    scrollview: {
        width: "100%",
    },
    maincontainer:{
        width: "100%",
        textAlign:  'center',
        marginTop: 80,
    },
    postWrapper: {
        // flex: 1,
        //alignItems: 'center',
        width: '100%',
        backgroundColor: '#F4F4F4',
        alignContent: "center",
    },
    commentWrapper: {
        // flex: 1,
        width: "85%",
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#F4F4F4',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 26,
        marginBottom: 10,
        fontWeight: 'bold',
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
        width: "100%",
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
        fontWeight: 'bold',
        lineHeight: 35,
    },
    infoContainer: {
        width: "100%",
        alignContent: "center",
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    commentContainer: {
        width: "100%",
        alignContent: "center",
    },
    commentText: {
        width: "90%",
        alignSelf: "center",
        marginTop: 5,
    },
    commentsTitle: {
        width: "85%",
        alignSelf: "center",
        marginBottom: 16,
    },
    allComments: {
        width: "85%",
        alignSelf: "center",
    }
});

export default PostDetails;
