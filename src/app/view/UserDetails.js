import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import Album from "../components/Album";
import CompanyIcon from "../../../assets/Company.png";
import EmailIcon from "../../../assets/Email.png";
import PhoneIcon from "../../../assets/Phone.png";
import MoreIcon from "../../../assets/More.png";
import TodoList from "../../app/components/TodoList";
import { fetchAPI } from "../utils/fetch";

const UserDetails = ({}) => {
  const [todos, setTodos] = useState([]);
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

  useEffect(() => {
    fetchAPI("/users/1/todos").then((result) => setTodos(result));
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Back to home"></Header>
      <View style={styles.mapContainer}></View>
      <View style={styles.userContainer}>
        <Text style={styles.name}>Clementine Bauch</Text>
        <View style={styles.wrapper}>
          <View style={styles.userInfoRow}>
            <Image style={styles.userInfoIcon} source={CompanyIcon} />
            <Text style={styles.userInfo}>Romaguera-Jacobso</Text>
          </View>
          <View style={styles.userInfoRow}>
            <Image style={styles.userInfoIcon} source={EmailIcon} />
            <Text style={styles.userInfo}>Nathan@yesenia.net</Text>
          </View>
          <View style={styles.userInfoRow}>
            <Image style={styles.userInfoIcon} source={PhoneIcon} />
            <Text style={styles.userInfo}>01 01 01 01 01</Text>
          </View>
          <View style={styles.todoRow}>
            <Text style={styles.todoTitle}>To do list</Text>
            <TouchableOpacity
              onPress={() => setIsTodoModalOpen(true)}
              style={styles.moreIcon}
            >
              <Image style={styles.icon} source={MoreIcon} />
            </TouchableOpacity>
          </View>
          {todos && (
            <TodoList
              isTodoModalOpen={isTodoModalOpen}
              setIsTodoModalOpen={setIsTodoModalOpen}
              setTodos={setTodos}
              data={todos}
            />
          )}
          <View style={styles.todoRow}>
            <Text style={styles.todoTitle}>Posts</Text>
          </View>
          <View style={styles.post}>
            <Post post={{ title: "Post title" }}></Post>
          </View>
          <View style={styles.post}>
            <Post post={{ title: "Post title" }}></Post>
          </View>
          <View style={styles.post}>
            <Post post={{ title: "Post title" }}></Post>
          </View>
          <View style={styles.todoRow}>
            <Text style={styles.todoTitle}>Albums</Text>
          </View>
          <View style={styles.post}>
            <Album post={{ title: "Post title" }}></Album>
          </View>
        </View>
      </View>
    </View>
  );
};

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
    borderRadius: "8px",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
