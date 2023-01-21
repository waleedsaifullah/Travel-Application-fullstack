import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function Login() {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Icon
                    name="arrow-left"
                    size={20}
                    color="white"
                />
                <Text style={styles.headerText}>Login</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.placeholder}>
                    <Text style={{ color: '#7e7e7e' }}>Email</Text>
                    <TextInput
                        placeholderTextColor="#ccc"
                        style={{ width: '100%', marginTop: 10 }}
                    />
                </View>

                <View style={styles.placeholder}>
                    <Text style={{ color: '#7e7e7e' }}>Password</Text>
                    <TextInput
                        placeholderTextColor="#ccc"
                        style={{ width: '100%', marginTop: 10 }}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <View style={{borderColor:'#ccc',borderWidth:1,marginVertical:20,width:'90%',alignSelf:'center'}}/>

                <View style={{
                    alignItems:'center',
                    flexDirection:'row',
                    width:'90%',
                    alignSelf:'center'
                }}>
                    <Text style={{
                        fontSize:15,
                        color:'#616161'
                    }}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{
                            color:'#4c00b0',
                            fontSize:15
                        }}>SignUP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f4e3ff'
    },
    header: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        // justifyContent:'space-between',
        backgroundColor: '#7e38b7'
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center'
    },
    body: {
        marginTop: 20,
        flex: 1
    },
    placeholder: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 15,
        padding: 10
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#7e38b7',
        alignItems: 'center',
        padding: 15
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '500'
    }
})