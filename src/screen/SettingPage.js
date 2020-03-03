import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends React.Component {
   static navigationOptions = {
    title: 'Setting',
    tabBarOptions: {
      activeBackgroundColor: 'gary',
      inactiveBackgroundColor: 'white',
      activeTintColor: '#000000',
      labelStyle: {
        //fontSize: '200%',
      },
    },
  };
  render() {
    return (
      <View style={{ padding: '20%' }}>
        <View>
          <View style={{ margin: '25%' }} />
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Sign out"
            color="red"
          />
        </View>
      </View>
    );
  }
}
