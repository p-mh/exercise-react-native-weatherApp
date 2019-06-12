import axios from 'axios';

import API_KEY from './auth.js';

export const getTodayWeather = async (city = 'Paris') => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFiveDaysWeather = async (city = 'Paris') => {
  try {
    const {
      data: { list },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    return list;
  } catch (error) {
    console.log(error);
  }
};
