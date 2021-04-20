import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import UserCard from "./UserCard";

const UserList = ({data}) => {
  return (
    <ScrollView horizontal="true" style={styles.container}>
      {data && data.map((user, i) => 
        <UserCard data={user} key={i} />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      position: "absolute",
      bottom: "2%",
      left: "2%",
  },
});

export default UserList;
