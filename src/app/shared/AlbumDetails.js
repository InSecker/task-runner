import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import closeIcon from "../../../assets/arrow.png";
import Gallery from "react-native-image-gallery";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const AlbumDetails = ({ albums, setIsAlbumDetails, albumIndex }) => {

  const albumsFormated = () => {
    const newAlbums = albums.map((album) => {
      return {
        source: { uri: album.url },
      };
    });
    return newAlbums;
  };

  return (
    <View style={styles.albumContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setIsAlbumDetails(false)}>
          <Icon name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Gallery
        style={{ flex: 1, backgroundColor: "black" }}
        images={albumsFormated()}
        initialPage={albumIndex}
      />
    </View>
  );
};

export default AlbumDetails;

const styles = StyleSheet.create({
  albumContainer: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  iconContainer: {
    position: "absolute",
    top: 30,
    right: 20,
    zIndex: 10,
  },
});
