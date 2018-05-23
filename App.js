import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/components/login.component';

const Application = createStackNavigator({
    Home: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: false
      })
    },
});

export default class App extends React.Component {
  render() {
    return (
      <Application/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
