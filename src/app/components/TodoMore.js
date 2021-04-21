import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import { configuration as api } from '../../../config';
import { fetchAddTodo, fetchAPI } from '../utils/fetch';

const AppButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        size === "sm" && {
          paddingHorizontal: 13,
          paddingVertical: 6,
          elevation: 6
        },
        backgroundColor && { backgroundColor }

      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 18 }]}>
        {title}
      </Text>
    </TouchableOpacity>
);



const TodoMore = ({data}) => {
    

    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState('');
    const [array,setArray] = useState([]);
    const [newPosts,setPosts] = useState([]);

    const getTodo = (todo) => {
        console.log(todo);
    }

    const setTodoOnData = (title) => {
        const todoToSave = {title}
        // console.log(title);
        // data.push(todoToSave);
        // console.log(data);
        const newPosts = [
            ...data,
            todoToSave
          ]
          setPosts(newPosts);

        console.log(newPosts);
    }

   

    return(
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <Text style={styles.title}>To do list</Text>
                <Icon style={styles.icon} name="add-box" size={30}></Icon>
            </View>
            <View style={styles.containerNew}>
                <View style={styles.containerIcon}>
                    <Icon style={styles.iconClose} name="close" size={25}></Icon>
                </View>
                <Text style={styles.titleNew}>Créer un nouveau Todo</Text>
                <TextInput
                    style={styles.contentNew}
                    onChangeText={(title) => setTitle(title)} 
                    placeholder='Description de votre Todo'
                />
                <AppButton title="Valider" size="sm" backgroundColor="#fff" onPress={() => {
                    setTodoOnData(title)
                }}/>
            </View>
        </View>
        
    )

}




export default TodoMore;

const styles = StyleSheet.create({
    maincontainer: {
        alignContent: 'center',
    },  
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
    },
    containerNew: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    titleNew: {
        fontSize: 20,
        paddingBottom: 20,
    },
    contentNew: {
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 50,
        paddingLeft: 15,
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    appButtonContainer: {
        marginTop: 20,
        marginBottom: 10,
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
    },
    appButtonText: {
        paddingLeft: 6,
        paddingRight: 6,
        fontWeight: 400,
    },
    containerIcon:{
        width: '100%',
        alignItems: 'flex-end'
    }
});