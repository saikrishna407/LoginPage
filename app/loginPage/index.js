import React, { Component } from 'react';
import { View, Alert, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { loginPassword, loginEmail, userAction } from './loginAction'
import user from '../user.json'

class Login extends Component {
    submit = () => {
        let _self = this;
        const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(_self.props.email);
        if (_self.props.email === null || _self.props.email === '' || !isEmailValid) {
            if (_self.props.email === null || _self.props.email === '' && _self.props.password === null || _self.props.password === '') {
                Alert.alert(
                    'fill the required fealds'
                )
            } else if (_self.props.email || _self.props.email === '') {
                if (_self.props.email || _self.props.email === '' || isEmailValid) {
                    Alert.alert('Please enter email');
                } else {
                    Alert.alert('Please enter Password000000');
                }
            }
        }

        else if (_self.props.password === null || _self.props.password === '') {
            Alert.alert('Please enter password');
        } else if (_self.props.password.length < 6) {
            Alert.alert(' password must in 6 letters');
        } else if (_self.props.email === _self.props.data.email && _self.props.password === _self.props.data.password) {
            Actions.dashboard()
            _self.props.user(user)
        } else {
            Alert.alert(' enterd pasword or email is not matched');
        }

    }

    render() {
        return (
            <View style={styles.main} >
                <Text style={styles.mainName}>Employees Login </Text>
                <TextInput
                    style={styles.education}
                    placeholder="user name "
                    placeholderTextColor={"white"}
                    onChangeText={(text) => this.props.emailFun(text)}
                />
                <TextInput
                    style={styles.education}
                    placeholder="pasword "
                    secureTextEntry={true}
                    textShadowColor='white'
                    placeholderTextColor={"white"}
                    onChangeText={(text) => this.props.passwordFun(text)}
                />
                <View >
                    <TouchableOpacity style={styles.loginTuch} onPress={() => { this.submit() }}>
                        <Text style={styles.mainTuch}>Login </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const mapStateToProps = state => ({
    email: state.email,
    password: state.password,
    data: state.data,
})


const mapDispatchToProps = (dispatch) => ({
    emailFun: (data) => dispatch(loginEmail(data)),
    passwordFun: (data) => dispatch(loginPassword(data)),
    user: (data) => dispatch(userAction(data))
}
)
export default connect(mapStateToProps, mapDispatchToProps)(Login)