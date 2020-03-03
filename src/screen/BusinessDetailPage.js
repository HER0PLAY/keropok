import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
  Picker,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  static navigationOptions = {
    headerShown: false,
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };



  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ScrollView keyboardShouldPersistTaps='handled' style={{ padding: '10%', backgroundColor: '#ffffff' }} >
          <View style={{ margin: '5%' }} />
          <View style={{ marginBottom: '15%', }} >
            <Image
              style={{ resizeMode: 'contain', alignSelf: "center", width: "45%" }}
              source={require('../assets/Images/Logo.png')} />
            <View style={{ margin: '4%' }} />

            <Text
              style={{ fontSize: 23, textAlign: 'center', fontWeight: 'bold' }}>
              BUSINESS DETAIL
          </Text>
            <View style={{ margin: '3%' }} />


            <TextInput
              placeholder="Business Name"
              autoCompleteType="name"
              value={this.state.businessName}
              placeholderTextColor="#444444"
              onChangeText={text => this.setState({ name: text })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />
            <View style={{ margin: 10 }} />

            <TextInput
              placeholder="Business Address"
              autoCompleteType="street-address"
              value={this.state.businessAddress}
              placeholderTextColor="#444444"
              onChangeText={text => this.setState({ name: text })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />
            <View style={{ margin: 10 }} />

            <TextInput
              placeholder="City"
              autoCompleteType="street-address"
              value={this.state.city}
              placeholderTextColor="#444444"
              onChangeText={text => this.setState({ email: text })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />
            <View style={{ margin: 10 }} />

            <View style={{ flexDirection: 'row', borderRadius: 4, }}>
              <View style={{ width: '85%' }} >
                <Picker
                  selectedValue={this.state.state}
                  placeholder="State"
                  placeholderTextColor="#444444"
                  style={{
                    flex: 1,
                    paddingHorizontal: 13,
                    backgroundColor: "#EDEDED",
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                  }}
                  onValueChange={(stateItemValue, itemIndex) =>
                    this.setState({ state: stateItemValue })
                  }>
                  <Picker.Item label="State" itemIndex="state" color="#444444" />
                  <Picker.Item label="Kerala" value="kerala" color="#444444" />
                  <Picker.Item label="Karnataka" value="karnataka" color="#444444" />
                  <Picker.Item label="Gujarat" value="gujarat" color="#444444" />
                  <Picker.Item label="Uttar Pradesh" value="uttar pradesh" color="#444444" />
                  <Picker.Item label="Jharkhand" value="jharkhand" color="#444444" />
                  <Picker.Item label="Rajasthan" value="rajasthan" color="#444444" />
                  <Picker.Item label="Andhra Pradesh" value="andhra pradesh" color="#444444" />
                  <Picker.Item label="Maharashtra" value="maharashtra" color="#444444" />
                  <Picker.Item label="Tamil Nadu" value="tamil nadu" color="#444444" />
                  <Picker.Item label="Punjab" value="punjab" color="#444444" />
                </Picker>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "#EDEDED",
                  borderBottomRightRadius: 4,
                  borderTopRightRadius: 4
                }} >

                <TouchableOpacity 
                  onPress={() => { this.state.onValueChange }}>
                  <Image
                    style={{ width: 20, height: 20, backgroundColor: "#EDEDED", alignSelf: 'center', }}
                    resizeMode='contain'
                    source={(require('../assets/Images/arrow-down.png')
                    )
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ margin: 10 }} />

            <View style={{ flexDirection: 'row', borderRadius: 4, }}>
              <View style={{ width: '85%' }} >
                <Picker
                  selectedValue={this.state.country}
                  placeholder="Country"
                  placeholderTextColor="#444444"
                  style={{
                    paddingHorizontal: 13,
                    backgroundColor: "#EDEDED",
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ country: itemValue })
                  }>
                  <Picker.Item label="Country" itemIndex="country" color="#444444" />
                  <Picker.Item label="Australia" value="australia" color="#444444" />
                  <Picker.Item label="Argentina" value="argentina" color="#444444" />
                  <Picker.Item label="Brazil" value="brazil" color="#444444" />
                  <Picker.Item label="Canada" value="canada" color="#444444" />
                  <Picker.Item label="China" value="china" color="#444444" />
                  <Picker.Item label="India" value="india" color="#444444" />
                  <Picker.Item label="Kazakhstan" value="kazakhstan" color="#444444" />
                  <Picker.Item label="Russia" value="russia" color="#444444" />
                  <Picker.Item label="Sudan" value="sudan" color="#444444" />
                  <Picker.Item label="United States" value="united states" color="#444444" />
                </Picker>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "#EDEDED",
                  borderBottomRightRadius: 4,
                  borderTopRightRadius: 4
                }} >

                <TouchableOpacity
                  onPress={() => { this.state.onValueChange }}>
                  <Image
                    style={{ width: 20, height: 20, backgroundColor: "#EDEDED", alignSelf: 'center', }}
                    resizeMode='contain'
                    source={(require('../assets/Images/arrow-down.png')
                    )
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            < View style={{ margin: 10 }} />

            <TextInput
              placeholder="Zipcode"
              autoCompleteType="postal-code"
              value={this.state.conformPassword}
              placeholderTextColor="#444444"
              onChangeText={text => this.setState({ conformPassword: text })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />
            <View style={{ margin: 10 }} />

            <TextInput
              placeholder="Website link"
              value={this.state.webLink}
              placeholderTextColor="#444444"
              onChangeText={text => this.setState({ password: text })}
              style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED", borderRadius: 4, }}
            />

            <View style={{ margin: 10 }} />

            <View
              style={{
                flex: 1,
                backgroundColor: "#EDEDED",
                borderRadius: 1,
                height: '10%',
                justifyContent: 'center',
                borderStyle: 'dashed',
                borderColor: '#444444',
                paddingHorizontal: '30%',
                borderWidth: 0.8
              }}>

              <Text style={{ alignSelf: 'center', marginTop: 8 }}>
                Business Logo
                </Text>
              <Image
                source={require('../assets/Images/upload.png')}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#EDEDED",
                  alignSelf: 'center',
                }}
              />
              <View style={styles.container}>
                <View style={styles.container}>

                  <Image
                    source={{ uri: this.state.filePath.uri }}
                    style={{ width: 130, height: 130, justifyContent: 'center', marginBottom: 10 }}
                  />



                  <Button
                    onPress={this.chooseFile.bind(this)}
                    title="Select File"
                    color="#444444"
                    margin='16'
                  />
                </View>
              </View>




              <View style={{ margin: 8 }} />
            </View>

            <View style={{ margin: 15 }} />

            <View style={styles.container}>
              <TouchableOpacity
                //   onPress={() => { this.props.navigation.push('DrawerNav') }}
                onPress={() => { this.props.navigation.push('MainDrawNav') }}
                style={styles.button}>
                <Text style={styles.text}>
                  Add Business Detail
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{ margin: 15 }} />
          </View>
          <View style={{ margin: 10 }} />
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

