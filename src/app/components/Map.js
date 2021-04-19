import React from 'react';
import { StyleSheet, View } from "react-native";

export default class Map extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    stretch: {
        width: 400,
        height: 400
    },
});
