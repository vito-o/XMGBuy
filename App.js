/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import Main from './Component/Main/XMGMain'
import LaunchImage from './Component/Main/XMGLaunchImage'
import XMGHomeDetail from './Component/Home/XMGHomeDetail'


/* import Home from './Component/Home/XMGHome'
import Shop from './Component/Shop/XMGShop'
import Mine from './Component/Mine/XMGMine'
import More from './Component/More/XMGMore' */


import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Main: Main,
    /* Home: Home,
    Shop: Shop,
    Mine: Mine,
    More: More, */
    LaunchImage:LaunchImage,
    XMGHomeDetail:XMGHomeDetail
  },
  {
    initialRouteName: "LaunchImage",
    defaultNavigationOptions:{
      header:null,
      headerStyle:{
        backgroundColor:'#f4511e'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return ( 
      <AppContainer />
    );
  }
}