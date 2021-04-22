import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowIcon from "../../../assets/arrow.png";

const Header = ({ title, action }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={action}>
          <View style={styles.headerWrapper}>
            <View>
              <Image style={styles.iconContainer} source={ArrowIcon} />
            </View>
            <Text>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: 60,
    // fontFamily: "sans-serif",
    zIndex: 10,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  headerWrapper: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    height: 14,
    width: 14,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 32,
    marginRight: 8,
  },
});
