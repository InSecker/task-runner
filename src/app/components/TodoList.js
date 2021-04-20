import React from 'react';
import { View } from 'react-native';
import TodoCard from './TodoCard';
import TodoMore from './TodoMore';


const TodoList = () => {
    return (
        <View>
            <TodoMore/>
            <TodoCard/>
        </View>
    )
}

export default TodoList;