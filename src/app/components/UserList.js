import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const UserList = ({data}) => {
  console.log(data)
  return (
    <ScrollView style={styles.container}>
      {data && data.map(({user, i}) => (
        <UserCard data={user} key={i} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      display: "flex",
      position: "absolute",
      bottom: "2%",
      left: "2%",
  },
});

export default UserList;
