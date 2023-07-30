// Create the login screen for the current app
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useFonts } from 'expo-font';


export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const [fontsLoaded] = useFonts({
        'REM-SemiboldItalic': require('../assets/fonts/REM-SemiBoldItalic.ttf'),
        'REM-ExtraLightItalic': require('../assets/fonts/REM-ExtraLight.ttf'),
      });

    if (!fontsLoaded) {
        return null;
    }

    const login = () => {
        if (email === "" || password === "") {
        Alert.alert("Please fill all the fields");
        } else {
        Alert.alert("Login Successful");
        }
    };
    
    return (
        <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>seeU</Text>
        </View>
        <View style={styles.formContainer}>
            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View>
            <Text style={styles.orText}>OR</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",  
        margin:35,   
        borderRadius: 25,
        marginTop:60,
    },
    logoContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
        marginTop: 50,
    },
    logoText: {
        color: "#05f",
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: "REM-SemiboldItalic",
    },
    formContainer: {
        padding: 25,
        paddingTop: 80,
    },
    input: {
        fontSize: 18,
        height: 40,
        backgroundColor: "rgba(0, 85, 130,26)",
        marginBottom: 20,
        color: "#fff",
        paddingHorizontal: 18,
        borderRadius: 20,
        fontFamily: "REM-ExtraLightItalic",
    },
    buttonContainer: {
        backgroundColor: "#05f",
        paddingVertical: 15,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 20,
        width: "50%",
        alignSelf: "center",

    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "REM-ExtraLightItalic",
    },
    orText:{
        marginTop: 25,
        marginBottom: 10,
        textAlign: "center",
        color: "#05f",
        fontWeight: "bold",
        fontSize: 20,
    }
});
