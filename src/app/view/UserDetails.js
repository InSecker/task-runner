import React, { useState } from 'react';
import { Text, View } from "react-native";


export const UserDetails = ({ navigation, route }) => {
    const { id } = route.params;

    return (
        <View>
            <Text>This is {id}'s profile</Text>
        </View>
    );
}

export default UserDetails;
