import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/app/view/Home";
import UserDetails from "./src/app/view/UserDetails";
import PostDetails from "./src/app/view/PostDetails";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name="UserDetails" component={UserDetails}/>
                <Stack.Screen name="PostDetails" component={PostDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
