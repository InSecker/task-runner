import React, { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Modal = ({ title, action, placeholder, actionTitle, close, isError }) => {
    const [state, setState] = useState("");

    const Button = ({ onPress, title, size, backgroundColor }) => (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.addButtonContainer,
                size === "sm" && {
                    paddingHorizontal: 13,
                    paddingVertical: 6,
                    elevation: 6,
                },
                backgroundColor && { backgroundColor },
            ]}
        >
            <Text style={[styles.addButtonText, size === "sm" && { fontSize: 18 }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <>
            <View style={styles.modalContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.containerNew}>
                        <TouchableOpacity onPress={close} style={styles.containerIcon}>
                            <Icon name="close" size={16}/>
                        </TouchableOpacity>
                        <View style={styles.closeIconContainer}/>
                        <Text style={styles.titleNew}>{title}</Text>
                        <TextInput
                            style={styles.contentNew}
                            onChangeText={(state) => setState(state)}
                            placeholder={placeholder}
                        />
                        {isError ? <ErrorMessage/> : null}
                        <Button
                            title={actionTitle}
                            size="sm"
                            backgroundColor="#fff"
                            onPress={() => action(state)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.modalOverlay}/>
        </>
    );
};

const ErrorMessage = () => (<Text style={{ color: 'red' }}>Value can't be empty !</Text>)

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        left: "8%",
        top: "30%",
        width: "85%",
        height: "10%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 11,
        // overflowY: "hidden",
    },
    modalOverlay: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: 0.5,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        // overflowY: "hidden",
    },
    mainContainer: {
        alignItems: "center",
        position: "relative",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 32,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        zIndex: 12,
    },
    containerNew: {
        width: "100%",
        alignItems: "center",
        borderColor: "#fff",
        backgroundColor: "#fff",
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
        fontSize: 24,
        paddingBottom: 20,
    },
    contentNew: {
        fontSize: 16,
        textAlign: "left",
        width: "100%",
        minHeight: 80,
        backgroundColor: "#f3f3f3",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#fff",
        height: 150,
        paddingLeft: 15,

    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
    },
    addButtonContainer: {
        marginTop: 24,
        marginBottom: 10,
        borderColor: "#fff",
        backgroundColor: "#fff",
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
    addButtonText: {
        paddingLeft: 6,
        paddingRight: 6,
        fontWeight: "400",
    },
    containerIcon: {
        width: "100%",
        alignItems: "flex-end",
    },
    closeIconContainer: {
        position: "absolute",
        top: 16,
        right: 16,
        marginBottom: 8,
    },
});
