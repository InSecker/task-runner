import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

const TodoMore = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>To do list</Text>
            <Icon style={styles.icon} name="add-box" size={30}></Icon>
        </View>
    )
}

export default TodoMore;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
});