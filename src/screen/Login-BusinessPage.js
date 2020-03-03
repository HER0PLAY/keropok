import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  StatusBar
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import firebase from 'react-native-firebase';

export default class Login extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('CustoDraw'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ScrollView keyboardShouldPersistTaps='handled'
          style={{ padding: '10%', backgroundColor: '#ffffff' }} >
          <View style={{ marginTop: '15%', marginBottom: '15%', }} >
            <View>
              <Image
                style={{ resizeMode: 'contain', alignSelf: "center", width: "60%" }}
                source={require('../assets/Images/Logo.png')} />
              <View style={{ margin: '8%' }} />
              <Text
                style={{ fontSize: 27, textAlign: 'center', fontWeight: 'bold' }}>
                BUSINESS LOGIN
          </Text>
              <View style={{ margin: '5%' }} />

              <TextInput
                placeholder="Email"
                autoCompleteType="email"
                value={this.state.username}
                placeholderTextColor="#444444"
                onChangeText={text => this.setState({ username: text })}
                style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
              />
              <View style={{ margin: 10 }} />

              <View style={{ flexDirection: 'row', borderRadius: 4, }}>
                <TextInput
                  blurOnSubmit={false}
                  placeholder="Password"
                  autoCompleteType="password"
                  value={this.state.password}
                  secureTextEntry={!this.state.showPassword}
                  placeholderTextColor="#444444"
                  onChangeText={text => this.setState({ password: text })}
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
                {/*  </View> */}
              </View>
              <View style={{ margin: 10 }} />
              <View style={{ flex: 1, flexDirection: 'row', }}>
                <CheckBox
                />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                  <Text style={{ color: '#444444', paddingTop: 5, fontSize: 15, }}>
                    Remember me
                </Text>
                  <Text
                    onPress={() => { this.props.navigation.navigate('Link') }}
                    style={{ color: '#444444', paddingTop: 5, fontSize: 15, }} >
                    Forgot Password ?
              </Text>
                </View>
              </View>
              <View style={{ margin: 17 }} />
              <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                  onPress={() => { this.handleLogin() }}
                  onPress={() => { this.props.navigation.push('BusinessDetail') }}>
                  <Text style={styles.text}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>

              {/*  <Button
            onPress={() => {
              if (
                this.state.password === 'Admin' &&
                this.state.username === 'Admin'
              ) {
                this.props.navigation.navigate('Link');
              } else {
                alert('  ❌  Wrong Data ');
              }
            }}
            title="Log in"
            color="#444444"
          /> */}

            </View>
            <View style={{ margin: 15 }} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
              <Text style={{ color: '#444444', fontSize: 16, paddingEnd: 7 }}>
                Don't have an account?
          </Text>
              <Text
                onPress={() => { this.props.navigation.navigate('SignupBusiness') }}
                style={{ color: '#444444', fontWeight: 'bold', fontSize: 16 }} >
                Sign Up Now
          </Text>
            </View>
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