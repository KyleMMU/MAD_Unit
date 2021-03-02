import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class Home extends Component{
  render(){

    const navigation = this.props.navigation;

    return(
        <View>
          <Text>Home Screen</Text>
          <Button title="Sign up" onPress={() => { navigation.navigate('Sign Up');}}
          />
          <Button title="Log in" onPress={() => { navigation.navigate('Log In');}}
          />
        </View>
    );
  }
}

export default Home;
