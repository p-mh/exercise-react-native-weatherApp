import React from 'react';
import CityContext from '../context/cityContext';

const withCity = WrappedComponent => props => (
  <CityContext.Consumer>
    {city => <WrappedComponent city={city} {...props} />}
  </CityContext.Consumer>
);

export default withCity;
