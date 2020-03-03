import * as React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import firebase from 'react-native-firebase';

export default class Signup extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)

      // .createUserWithEmailAndPassword(email, password)
      /* .then((loggedInUser) => {this.setState({user: loggedInUser})
      console.log('Register with user : ${JSON.stringify(user.toJSON)}')
    }) */
      .then(() => this.props.navigation.navigate('BusinessDetail'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ScrollView keyboardShouldPersistTaps='handled'
          style={{ padding: 40, backgroundColor: '#ffffff' }} >
          <View style={{ margin: '5%' }} />
          <View>
            <Image
              style={{ resizeMode: 'contain', alignSelf: "center", width: "60%" }}
              source={require('../assets/Images/Logo.png')} />
            <View style={{ margin: '4%' }} />

            <Text
              style={{ fontSize: 27, textAlign: 'center', fontWeight: 'bold' }}>
              SIGN UP
          </Text>
            <View style={{ margin: '3%' }} />


            <TextInput
              placeholder="Name"
              autoCompleteType="name"
              value={this.state.name}
              placeholderTextColor="#444444"
              onChangeText={text => this.setState({ name: text })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />
            <View style={{ margin: 10 }} />

            <TextInput
              placeholder="Email"
              autoCompleteType="email"
              value={this.state.email}
              placeholderTextColor="#444444"
              onChangeText={/* text */ email => this.setState({ email/* : text  */ })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />
            <View style={{ margin: 10 }} />

            <TextInput
              placeholder="Phone Number"
              autoCompleteType="tel"
              value={this.state.phNumber}
              placeholderTextColor="#444444"
              onChangeText={text => this.setState({ phNumber: text })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />
            <View style={{ margin: 10 }} />
            <View style={{ flexDirection: 'row', borderRadius: 4, }}>
              <TextInput
                placeholder="Password"
                autoCompleteType="password"
                value={this.state.password}
                secureTextEntry={!this.state.showPassword}
                placeholderTextColor="#444444"
                onChangeText={/* text */ password => this.setState({ password/* : text */ })}
                style={{
                  flex: 1,
                  paddingHorizontal: 13,
                  backgroundColor: "#EDEDED",
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                }}
              />
              {/*    <View style={{ flex:1, justifyContent: 'center', alignItems:'flex-end', paddingEnd: 15, backgroundColor: "#EDEDED", borderBottomRightRadius: 4,borderTopRightRadius: 4}} > */}

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#EDEDED',
                  borderBottomRightRadius: 4,
                  borderTopRightRadius: 4
                }}
                onPress={() => {
                  debugger
                  this.setState({ showPassword: !this.state.showPassword });
                }}>
                <Image
                  style={{ width: 60, height: 22, backgroundColor: "#EDEDED", alignSelf: 'center', }}
                  resizeMode='contain'
                  source={
                    this.state.showPassword ? (
                      require('../assets/Images/eye.png')
                    ) : (
                        require('../assets/Images/eye-off.png')
                      )
                  }
                />
              </TouchableOpacity>
              {/* </View> */}
            </View>

            < View style={{ margin: 10 }} />

            <View style={{ flexDirection: 'row', borderRadius: 4, }}>
              <TextInput
                placeholder="Conform Password"
                autoCompleteType="password"
                value={this.state.conformPassword}
                secureTextEntry={!this.state.showConformPassword}
                placeholderTextColor="#444444"
                onChangeText={text => this.setState({ conformPassword: text })}
                style={{
                  flex: 1,
                  paddingHorizontal: 13,
                  backgroundColor: "#EDEDED",
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                }}
              />
              {/*    <View style={{ flex:1, justifyContent: 'center', alignItems:'flex-end', paddingEnd: 15, backgroundColor: "#EDEDED", borderBottomRightRadius: 4,borderTopRightRadius: 4}} > */}

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#EDEDED',
                  borderBottomRightRadius: 4,
                  borderTopRightRadius: 4
                }}
                onPress={() => {
                  debugger
                  this.setState({ showConformPassword: !this.state.showConformPassword });
                }}>
                <Image
                  style={{ width: 60, height: 22, backgroundColor: "#EDEDED", alignSelf: 'center', }}
                  resizeMode='contain'
                  source={
                    this.state.showConformPassword ? (
                      require('../assets/Images/eye.png')
                    ) : (
                        require('../assets/Images/eye-off.png')
                      )
                  }
                />
              </TouchableOpacity>
              {/*  </View> */}
            </View>
            <View style={{ margin: 15 }} />
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('Login') }}
                //  onPress={() => { this.handleSignUp() }}
                style={styles.button}>
                <Text style={styles.text}>
                  Sign Up
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ margin: 10 }} />

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ color: '#444444', textAlign: 'center', fontSize: 13 }}>
              by clicking Sign Up you are agree width over
              </Text>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <Text onPress={() => { this.props.navigation.navigate('Home') }}
                style={{
                  color: '#444444',
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                  fontSize: 13
                }} >
                TERMS & CONDITION
                </Text>

              <Text onPress={() => { this.props.navigation.navigate('Home') }}
                style={{
                  color: '#444444',
                  textAlign: 'center',
                  fontSize: 14,
                  paddingHorizontal: 5
                }} >
                &
                </Text>

              <Text onPress={() => { this.props.navigation.navigate('Home') }}
                style={{
                  color: '#444444',
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                  fontSize: 13
                }} >
                PRIVACY POLICY
                </Text>
            </View>
          </View>
          <View style={{ margin: 15 }} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
            <Text style={{ color: '#444444', fontSize: 16, paddingEnd: 7 }}>
              Already have an account?
              </Text>
            <Text
              onPress={() => { this.props.navigation.navigate('Login') }}
              style={{ color: '#444444', fontWeight: 'bold', fontSize: 16 }} >
              Login now
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#444444',
    padding: 14,
    borderRadius: 4,
  },
})

