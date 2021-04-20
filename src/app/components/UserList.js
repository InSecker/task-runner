import React from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
import UserCard from "./UserCard";

const UserList = ({ users }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ height: 150 }}>
                    <ScrollView horizontal>
                        <View style={styles.list}>
                            {users && users.map((user, i) => <UserCard user={user} key={i}/>)}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    list: {
        flexDirection: 'row'
    }
});

export default UserList;
