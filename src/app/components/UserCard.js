import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const UserCard = ({data}) => {
  const {imageURL, name} = data;
  return (
    <View style={styles.container}>
      <Image src={imageURL}/>
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      width: "50%",
      backgroundColor: '#fff',
  },
});

export default UserCard;
