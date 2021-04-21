import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import Album from "../components/Album";
import CompanyIcon from "../../../assets/Company.png";
import EmailIcon from "../../../assets/Email.png";
import PhoneIcon from "../../../assets/Phone.png";
import MoreIcon from "../../../assets/More.png";
import TodoList from "../../app/components/TodoList";
import { fetchAPI, orderTodos } from "../utils/helpers";

const UserDetails = ({ route, navigation }) => {
    const { id, user } = route.params;
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

    useEffect(() => {
        const randomAlbumIds = [];
        for (let i = 0; i < 15; i++) {
            randomAlbumIds.push(Math.floor(Math.random() * 6) + 1);
        }
        fetchAPI(`/users/${id}/todos`).then((result) => {
            orderTodos(result, setTodos);
        });
        fetchAPI(`/users/${id}/posts`).then((result) =>
            setPosts(result.slice(0, 4))
        );
        fetchAPI("/photos").then((result) => {
            setAlbums(result.filter((album) => randomAlbumIds.includes(album.id)));
        });
    }, []);

    return (
        <View style={styles.container}>
            <Header
                action={() => navigation.navigate("Home")}
                title="Back to home"
            />
            <View style={styles.mapContainer}/>
            <View style={styles.userContainer}>
                <Text style={styles.name}>{user?.name}</Text>
                <View style={styles.wrapper}>
                    <InformationRowIcon value={user?.company.name} icon={CompanyIcon}/>
                    <InformationRowIcon value={user?.email} icon={EmailIcon}/>
                    <InformationRowIcon value={user?.phone} icon={PhoneIcon}/>
                    <View style={styles.todoRow}>
                        <Text style={styles.todoTitle}>To do list</Text>
                        <TouchableOpacity
                            onPress={() => setIsTodoModalOpen(true)}
                            style={styles.moreIcon}
                        >
                            <Image style={styles.icon} source={MoreIcon}/>
                        </TouchableOpacity>
                    </View>
                    {todos && (
                        <TodoList
                            isTodoModalOpen={isTodoModalOpen}
                            setIsTodoModalOpen={setIsTodoModalOpen}
                            setTodos={setTodos}
                            todos={todos}
                        />
                    )}
                    <View style={styles.todoRow}>
                        <Text style={styles.todoTitle}>Posts</Text>
                    </View>
                    {posts && posts.map((post, i) => (
                        <View style={styles.post} key={i}>
                            <Post navigation={navigation} post={post} userId={id}/>
                        </View>
                    ))}
                    <View style={styles.todoRow}>
                        <Text style={styles.todoTitle}>Albums</Text>
                    </View>
                    {albums && albums.map((album, i) => (
                        <View style={styles.post} key={i}>
                            <Album album={album}/>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const InformationRowIcon = ({ value, icon }) => (
    <View style={styles.userInfoRow}>
        <Image style={styles.userInfoIcon} source={icon}/>
        <Text style={styles.userInfo}>{value}</Text>
    </View>
)
export default UserDetails;

const styles = StyleSheet.create({
    container: {
        height: "auto",
        width: "100%",
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        marginTop: "16px",
    },
    mapContainer: {
        width: "100%",
        height: "250px",
        backgroundColor: "grey",
        opacity: 0.4,
    },
    userContainer: {
        width: "330px",
        height: "auto",
        position: "absolute",
        top: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
    },
    name: {
        fontWeight: "bold",
        fontSize: "32px",
        fontFamily: "sans-serif",
    },
    userInfoRow: {
        width: "100%",
        height: "16px",
        flex: 1,
        flexDirection: "row",
        maxHeight: "16px",
        justifyContent: "center",
        marginBottom: "12px",
    },
    userInfoIcon: {
        height: "16px",
        width: "16px",
        marginRight: "8px",
    },
    icon: {
        height: "16px",
        width: "16px",
    },
    userInfo: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: "sans-serif",
    },
    posts: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    post: {
        width: "100%",
        marginBottom: "16px",
    },
    todoRow: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "18px",
    },
    todoTitle: {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "24px",
    },
    moreIcon: {
        maxWidth: "32px",
        height: "32px",
        borderRadius: 8,
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
