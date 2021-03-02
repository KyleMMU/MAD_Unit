import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';


class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: 'kyledscc@gmail.com',
      password: 'password123',
    };
  }

  loginUser(){

    const navigation = this.props.navigation;
    const { storeEmail } = this.state;
    const { storePassword } = this.state;
    console.log(storeEmail);
    console.log(storePassword);
    return fetch("http://10.0.2.2:3333/api/1.0.0/user",
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => {
      Alert.alert("Logging in");
      navigation.navigate('Menu');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){

    const navigation = this.props.navigation;

    return(
        <View>
          <Text>Log In</Text>

          <TextInput placeholder="enter username"
          />
          <TextInput secureTextEntry={true} placeholder="password"
          />
          <Button title="Login" onPress={() => { navigation.navigate('Menu');}}
          />
        </View>
    );
  }
}

export default Login;
