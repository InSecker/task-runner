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
            <Icon name="add-box"></Icon>
        </View>
    )
}

export default TodoMore;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'inline',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '24px',
    }
});