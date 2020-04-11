
import React, { Component } from 'react'
import {StyleSheet, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import {Block, Button, Card, Text, Input} from '../shared'


const VALID_EMAIL = "welcome@mail.com";
const VALID_PASSWORD = "12345";

export default class Login extends Component {

    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: [],
        loading: false
      };
    
      handleLogin() {
        const { navigation } = this.props;
        const { email, password } = this.state;
        const errors = [];
    
        this.setState({ loading: true });
    
        if (email !== VALID_EMAIL) {
          errors.push("email");
        }
        if (password !== VALID_PASSWORD) {
          errors.push("password");
        }
    
        this.setState({ errors, loading: false });
    
        if (!errors.length) {
          navigation.navigate("Home");
        }
      }

    render() {
        const { loading, errors } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
        return (
          <Block style={{backgroundColor : "#FFF"}} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.login} behavior="height">
            <Card >
                <Text text="Login Form" bold title gray2/>
              <Input
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              />
              <Input
                secure
                label="Password"
                error={hasErrors("password")}
                style={[styles.input, hasErrors("password")]}
                defaultValue={this.state.password}
                onChangeText={text => this.setState({ password: text })}
              />
              <Button onPress={() => this.handleLogin()}
                  text ={loading ? <ActivityIndicator size="small" color="white"/> : 'Login'}
              />
            </Card>
            </TouchableWithoutFeedback>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    login: {
      flex: 1,
      justifyContent: "center"
    },
    TextInput: {
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: "#ff0",
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginVertical : 15
    },
    hasErrors: {
      borderBottomColor: "#f0f"
    }
  });

