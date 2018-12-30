import React from 'react';
import { View, Text, Image, Button, Navigator, AsyncStorage } from 'react-native'

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View>
          <Button title="Sign in!" onPress={this._signInAsync} />

          <Button title="Sign home!" onPress={()=>this.props.navigation.navigate('App')} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
}