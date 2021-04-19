import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

const TodoCard = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Name To do list</Text>
            <Icon name="check-box"></Icon>
        </View>
    </View>
  )
}

export default TodoCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titre_h1: {
        textAlign: 'left',
        fontSize: '35px'
    }
});
