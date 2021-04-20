import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import userIco from "../../../assets/Users.svg";

const UserCard = ({data}) => {

  console.log(data)
  const {name} = data;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={userIco}/>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      width: "40vw",
      height: "20vh",
      marginLeft: "4vw",
      borderRadius: "10px",
      backgroundColor: 'white',
      padding: "20px",
  },
  image: {
    width: "40px",
    height: "40px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    fill: "red",
  },
  text: {
    textAlign: "center",
  }
});

export default UserCard;
