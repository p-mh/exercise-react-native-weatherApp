import React from 'react';
import {
  View,
  TextInput,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';

const Top = ({ validateCity, openDrawer }) => {
  return (
    <View
      style={{
        backgroundColor: '#2196f3',
        padding: 10,
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 7,
        }}
      >
        <TouchableOpacity onPress={openDrawer}>
          <Image
            style={{ width: 25, height: 25 }}
            source={{
              uri: `https://image.flaticon.com/icons/png/128/60/60510.png`,
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 0,
            marginLeft: 10,
            flex: 1,
          }}
          onSubmitEditing={validateCity}
        />
      </View>
    </View>
  );
};

export default Top;
