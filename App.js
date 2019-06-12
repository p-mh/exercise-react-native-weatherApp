/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, Text, DrawerLayoutAndroid, Switch } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import CityContext from './context/cityContext';

import Top from './components/Top';
import WeatherContainer from './components/WeatherContainer';
import Comments from './components/Comments';

const MainNavigator = createDrawerNavigator({
  Weather: { screen: WeatherContainer },
  'Leave a comments': { screen: Comments },
  Params: { screen: Comments },
});

const AppContainer = createAppContainer(MainNavigator);

class App extends PureComponent {
  render() {
    return <AppContainer />;
  }
}

export default AppContainer;
