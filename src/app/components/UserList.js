import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import UserCard from "./UserCard";

const UserList = ({ users, navigation }) => {


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ height: 160 }}>
                    <ScrollView horizontal>
                        <View style={styles.list}>
                            {users && users.map((user, i) => (
                                <UserCard navigation={navigation} user={user} key={i}/>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    list: {
        flexDirection: 'row',
    }
});

export default UserList;
