import React from 'react';
import { View } from 'react-native';
import TodoCard from './TodoCard';
import TodoMore from './TodoMore';


const TodoList = ({data}) => {
    return (
        <View>
            <TodoMore/>
            {data && data.map((user, i) => 
                <TodoCard data={user} key={i} />
            )}
        </View>
    )
}

export default TodoList;