import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'



const TodoCard = ({data}) => {

    return (
        <View style={styles.main_container}>
            <View style={styles.todoContent}>
                <Text style={styles.text}>{data.title}</Text>
                {data.completed? <Icon style={styles.icon} name="check-box" size={20}></Icon> : <Icon style={styles.icon} name="check-box-outline-blank" size={20}></Icon>}
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
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 16,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 15,
    },
    text: {
        width: '80%',
        fontSize: 16,
        fontWeight: 500,
    }
});
