import React, { PureComponent } from 'react';
import moment from 'moment';
import { Text, Image, View, FlatList } from 'react-native';
import { getFiveDaysWeather } from '../services/apiCalls';

import withCity from '../hoc/withCity';

class FiveDays extends PureComponent {
  state = {
    weatherList: [],
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
    const weatherList = await getFiveDaysWeather(city);
    this.setState({ weatherList });
  };

  render() {
    const { weatherList } = this.state;
    const showWeather =
      weatherList.length &&
      weatherList.map(({ dt, weather }) => {
        <View>
          <Text>{dt}</Text>
          <Text>{weather[0].main}</Text>
        </View>;
      });
    return (
      <View>
        <FlatList
          data={weatherList}
          keyExtractor={item => item.dt.toString()}
          renderItem={({
            item: {
              dt,
              weather,
              main: { temp_max, temp_min },
            },
          }) => (
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  flex: 2,
                  justifyContent: 'space-around',
                }}
              >
                <Text style={{ color: 'black' }}>
                  {moment(dt, 'X').format('dddd, HH:mm')}
                </Text>
                <Text>{weather[0].main}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: `http://openweathermap.org/img/w/${
                        weather[0].icon
                      }.png`,
                    }}
                  />
                </View>
                <View>
                  <Text>{temp_max} °C</Text>
                  <Text>{temp_min} °C</Text>
                </View>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: '#999999',
                height: 1,
                margin: 0,
              }}
            />
          )}
        />
      </View>
    );
  }
}

export default withCity(FiveDays);
