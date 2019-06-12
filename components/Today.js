import React, { PureComponent } from 'react';
import { Text, Image, View } from 'react-native';

import withCity from '../hoc/withCity';

import { getTodayWeather } from '../services/apiCalls';

class Today extends PureComponent {
  state = {
    weather: null,
    main: null,
  };
  componentDidMount() {
    this.getWeather();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.getWeather();
    }
  }
  getWeather = async () => {
    const { city } = this.props;
    const { weather, main, wind } = await getTodayWeather(city);
    this.setState({
      weather,
      main,
      wind,
    });
  };

  render() {
    const { weather, main, wind } = this.state;
    return (
      <View style={{ backgroundColor: '#6ec6ff', flex: 1 }}>
        {weather && (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
            }}
          />
        )}
        <Text>{weather && weather[0].main}</Text>
        <Text>Temperature: {main && main.temp} °C</Text>
        <Text>Minimum: {main && main.temp_min} °C</Text>
        <Text>Maximum: {main && main.temp_max} °C</Text>
        <Text>Wind: {wind && wind.speed} meter/sec</Text>
      </View>
    );
  }
}

export default withCity(Today);
