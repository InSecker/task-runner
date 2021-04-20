import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

const TodoCard = () => {
  return (
    <View style={styles.main_container}>
        <View style={styles.todoContent}>
            <Text style={styles.text}>Name To do list</Text>
            <Icon name="check-box" size={20}/>
        </View>
    </View>
  )
}

export default TodoCard;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    todoContent: {
        flexDirection: 'row',
        width: '85%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 16,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
    }
});
