import React, {useState} from 'react';
import { StyleSheet, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {Block, Card, Button, Input, Text} from '../shared'

const Schema = yup.object({
    username: yup.string().required().min(4), 
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Password is required')
  });


const SignUp = ({navigation}) => {

   const [loading, setLoading] = useState(false)

    return (
        <Block style={{backgroundColor : "#FFF"}} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} behavior="height">
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={Schema}
                onSubmit={(values, actions) => {
                actions.resetForm();
                navigation.navigate("Home");
                console.log(values);
                }}
            >
            {props => (
                <Card >
                    <Text text="SignUp Form" bold title gray2/>
                    <Input
                        label="User Name"
                        style={styles.input}
                        defaultValue={props.handleChange('username')}
                        placeholder='User Name'
                        onChangeText={props.handleChange('username')}
                        value={props.values.username}
                        onBlur={props.handleBlur('username')}
                    />
                    <Text style={styles.errorText} text={props.touched.username && props.errors.username} />
                    <Input
                        label="Email"
                        style={styles.input}
                        defaultValue={props.handleChange('email')}
                        placeholder='Email'
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        onBlur={props.handleBlur('email')}
                    />
                    <Text style={styles.errorText} text={props.touched.email && props.errors.email}/>
                    <Input
                        secure
                        label="Password"
                        style={styles.input}
                        placeholder='Password'
                        onChangeText={props.handleChange('password')}
                        value={props.values.password}
                        onBlur={props.handleBlur('password')}
                    />
                    <Text style={styles.errorText} text={props.touched.password && props.errors.password} />
                    <Button onPress={props.handleSubmit}
                        text ={loading ? <ActivityIndicator size="small" color="white"/> : 'Sing up'}
                    />
                </Card>
            )}
            </Formik>
            </TouchableWithoutFeedback>
        </Block>
    )
}


const styles = StyleSheet.create({
    errorText : {
        color : 'crimson',
        fontStyle:'italic',
        marginBottom:15
      }
})

export default SignUp
