//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, 
    KeyboardAvoidingView,
    TouchableOpacity
 } from 'react-native';

// create a component
class Login extends Component {

    constructor(props){
        super(props);
        this.state =  {
            username: '',
            password: ''
        }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>LOGIN</Text>

                    <TextInput style={styles.textInput}
                        placeholder="Username"
                        onChangeText={ (username) => this.setState({username})}
                        underlineColorAndroid='transparent'/>

                    <TextInput style={styles.textInput}
                        placeholder="Password"
                        onChangeText={ (password) => this.setState({password})}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}>
                        <Text>Log in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    login = () => {
        let dataLogin = JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })

        alert(dataLogin)
    }
}

// define your styles
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        paddingLeft: 40,
        paddingRight: 40
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#819ca9',
        padding: 20,
        alignItems: 'center'
    }
});

//make this component available to the app
export default Login;
