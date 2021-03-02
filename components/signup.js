import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';


class Signup extends Component{

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }

  createUser(){

    const navigation = this.props.navigation;
    const { storeName } = this.state;
    const { storeSurname } = this.state;
    const { storeEmail } = this.state;
    const { storePassword } = this.state;
    console.log(storeName);
    console.log(storeSurname);
    console.log(storeEmail);
    console.log(storePassword);
    return fetch("http://10.0.2.2:3333/api/1.0.0/user",
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: storeName,
        last_name: storeSurname,
        email: storeEmail,
        password: storePassword,
      })
    })
    .then((response) => {
      Alert.alert("User Created");
      navigation.navigate('Menu');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){



    return(
        <View>
          <Text>Signup</Text>
          <TextInput placeholder="Name"
          onChangeText={storeName => this.setState({storeName})}
          />
          <TextInput placeholder="Surname"
          onChangeText={storeSurname => this.setState({storeSurname})}
          />
          <TextInput placeholder="Enter e-mail"
          onChangeText={storeEmail => this.setState({storeEmail})}
          />
          <TextInput secureTextEntry={true} placeholder="password"
          onChangeText={storePassword => this.setState({storePassword})}
          />
          <Button title="Register" onPress={() => { this.createUser();}}
          />
        </View>
    );
  }
}

export default Signup;
