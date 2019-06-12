import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ToolbarAndroid,
} from 'react-native';
import { withNavigation } from 'react-navigation';

class Comments extends PureComponent {
  state = { text: '' };
  stateText = text => this.setState({ text });
  sendText = () => {
    const { text } = this.state;
    console.log(text);
    this.setState({ text: '' });
  };
  render() {
    const { text } = this.state;
    return (
      <View style={{ padding: 0, backgroundColor: '#ffc107', flex: 1 }}>
        <View
          style={{
            backgroundColor: '#2196f3',
            height: 60,
            padding: 17,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Image
              style={{ width: 25, height: 25, marginRight: 10 }}
              source={{
                uri: `https://image.flaticon.com/icons/png/128/60/60510.png`,
              }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Comments</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            multiline={true}
            numberOfLines={20}
            autoFocus={true}
            onChangeText={this.stateText}
            style={{
              padding: 10,
              margin: 0,
              backgroundColor: 'white',
              marginBottom: 10,
              textAlignVertical: 'top',
            }}
            value={text}
          />
          <Button
            title="Leave a comment"
            onPress={this.sendText}
            color="#c79100"
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(Comments);
