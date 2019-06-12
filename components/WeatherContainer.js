import React, { PureComponent } from 'react';

import { View } from 'react-native';

import {
  createMaterialTopTabNavigator,
  createAppContainer,
  withNavigation,
} from 'react-navigation';

import CityContext from '../context/cityContext';

import Top from './Top';
import Today from './Today';
import FiveDays from './FiveDays';

const MainNavigator = createMaterialTopTabNavigator(
  {
    Today: { screen: Today },
    'Five Days': { screen: FiveDays },
  },
  { tabBarOptions: { indicatorStyle: { backgroundColor: 'white' } } }
);

const WeatherNavigation = createAppContainer(MainNavigator);

class WeatherContainer extends PureComponent {
  state = {
    city: 'Paris',
    metricIsCelsius: true,
  };
  validateCity = ({ nativeEvent: { text: city } }) => this.setState({ city });

  switchMetric = () =>
    this.setState(prevState => ({
      metricIsCelsius: !prevState.metricIsCelsius,
    }));

  render() {
    const { city } = this.state;
    return (
      <CityContext.Provider value={city}>
        <View style={{ flex: 1 }}>
          <Top
            openDrawer={this.props.navigation.openDrawer}
            validateCity={this.validateCity}
          />
          <WeatherNavigation />
        </View>
      </CityContext.Provider>
    );
  }
}

export default withNavigation(WeatherContainer);
