import React, { Component } from 'react';
import Main from './components/Main';
import Chat from './components/Chat';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Create the navigator
const navigator = createStackNavigator(
  {
    Main: { screen: Main },
    Chat: { screen: Chat }
  },
  {
    initialRouteName: 'Main'
  }
);

export default createAppContainer(navigator);

