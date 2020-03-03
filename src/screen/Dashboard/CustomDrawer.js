import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';

//import Utils from "./utils/index"

export default class CustomDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { name: "Dashboard", routeName: "DashboardScr", icon: require("../../assets/Images/Dashboard.png"), selected: true },
        { name: "Jobs", routeName: "JobsScr", icon: require("../../assets/Images/Job.png"), selected: false },
        { name: "InviteUser", routeName: "InviteUserScr", icon: require("../../assets/Images/User-Customer.png"), selected: false },
        { name: "Customers", routeName: "CustomersScr", icon: require("../../assets/Images/User-Customer.png"), selected: false },
        { name: "Estimates", routeName: "EstimatesScr", icon: require("../../assets/Images/Estimate.png"), selected: false },
        { name: "Scan", routeName: "ScanScr", icon: require("../../assets/Images/Scan.png"), selected: false },
        { name: "Settings", routeName: "SettingsScr", icon: require("../../assets/Images/Setting.png"), selected: false },
        { name: "Pricing", routeName: "PricingScr", icon: require("../../assets/Images/Pricing.png"), selected: false },
        { name: "Logout", routeName: "LogoutScr", icon: require("../../assets/Images/Logout.png"), selected: false },
      ],
    };
  }




  styleForMenu = item => {
    let menustyle = {
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: item.selected ? "#E0E0E0" : "#ffffff",
      borderColor: "#E0E0E0",
      borderTopWidth: 1.5
    };
    return menustyle;
  };

  cancelLogoutTapped = () => {
    this.setState({ logoutDialogVisible: false });
  };

  logoutTapped = () => {
    this.setState({ logoutDialogVisible: false }, () => this.props.navigation.navigate("Auth"));
  };


  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <ScrollView style={styles.scrollview}>

          {/* ---  Logo --- */}

          <Image
            style={styles.profileImage}
            source={require('../../assets/Images/Logo.png')} />

          {/* ---  Items --- */}
          <View style={styles.itemsContainer}>
            {this.state.menuItems.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.closeDrawer();

                    if (item.routeName === "logout") {
                      this.setState({ logoutDialogVisible: true });
                    } else {
                      this.props.navigation.navigate(item.routeName);
                    }
                  }}
                  key={index}
                  style={this.styleForMenu(item)}
                >
                  {/*     <Image
                    style={{ resizeMode: 'contain', alignSelf: 'flex-start', height: '100%' }}
                    source={item.icon}
                  /> */}

                  <Image style={styles.itemImage} source={item.icon} />
                  <Text style={styles.itemNameText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        

        {/* ---  Logo --- */}
        <Image style={styles.profileImage}
          source={require('../../assets/Images/Logo.png')} />


        {/* ---  Version --- */}
        <Text style={styles.versionText}>{"Ver Dev-1.0(1)"}</Text>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  versionText: {
    fontSize: 15,
    color: "#282D32",
    marginLeft: 10,
    fontWeight: "400",
    fontFamily: "HelveticaNeue-Light",
    marginBottom: '1%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  itemNameText: {
    fontSize: 17,
    color: "#000000",
    marginLeft: 7,
  },
  itemImage: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },
  itemsContainer: {
    marginTop: '9%',
    width: Dimensions.get('window').width / 0.8,
  },
  profileImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: "70%",
    marginTop: "5%",
    marginBottom: '7%',
  },
  scrollview: {
    backgroundColor: "#ffffff",
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "7%",
    backgroundColor: "#ffffff",
  },
});


