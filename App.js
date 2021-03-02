import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home'
import Signup from './components/signup'
import Login from './components/login'
import Map from './components/map'
import Menu from './components/menu'

const Stack = createStackNavigator(); // -Creates a stack variable for navigating through pages


class App extends Component {
 render(){



   return (
     <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Sign Up" component={Signup} />
           <Stack.Screen name= "Log In" component={Login} />
           <Stack.Screen name= "Menu" component={Menu} />
           <Stack.Screen name= "Map" component={Map} />
      </Stack.Navigator>

     </NavigationContainer>
   );
 }
}

export default App
