import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

const TodoMore = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>To do list</Text>
            <Icon style={styles.icon} name="add-box" size={30}></Icon>
            <View style={styles.containerMore}>
                <Text>Create a new Todo</Text>
                <TextInput onChangeText={(text) => onTodo(text)} placeholder='Description de votre Todo'></TextInput>
                <Button>Valider</Button>
            </View>
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
    containerMore: {
        display:'none',
    }
});