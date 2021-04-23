import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Post = ({ album }) => {
  return (
    <View style={styles.main_container}>
      <View style={styles.postContainer}>
        <Image
          source={{
            uri: album.url,
          }}
          style={styles.roundedImage}
        />
        <Text style={styles.text}>{album.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 12,
  },
  text: {
    width: "80%",
    fontSize: 16,
    marginLeft: 12,
  },
  postContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    borderColor: "#fff",
    backgroundColor: "#fff",
    // borderWidth: 1,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  roundedImage: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    // backgroundSize: "unset",
    width: 50,
    height: "100%",
  },
});

export default Post;
