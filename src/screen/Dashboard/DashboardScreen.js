import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Switch, Image, FlatList, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { FloatingAction } from "react-native-floating-action";

import Components from "../../components/index"
import DeviceInfo from 'react-native-device-info';
import { getUniqueId, getManufacturer } from 'react-native-device-info';

import Utils from "../../utils/index"
const viewWidth = "100%" * (Utils.MethodUtils.isTablet() ? 0.6 : 0.9)

class HorizontalFlatListItem {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                width: 50,
                margin: 4,
            }}>
            </View>
        )
    }
}

const actions = [
    {
        text: "Scan",
        color: "#000000",
        icon: require("../../assets/Images/Scan.png"),
        textColor: "#FFFFFF",
        textBackground: "#000",
        name: "bt_scan",
        position: 2
    },
    {
        text: "Customers",
        color: "#000",
        icon: require("../../assets/Images/User-Customer.png"),
        textColor: "#FFFFFF",
        textBackground: "#000",
        name: "bt_customers",
        position: 1
    },
    {
        text: "Jobs",
        color: "#000",
        icon: require("../../assets/Images/Job.png"),
        textColor: "#FFFFFF",
        textBackground: "#000",
        name: "bt_jobs",
        position: 3
    },
    {
        text: "Settings",
        color: "#000",
        icon: require("../../assets/Images/Setting.png"),
        textColor: "#FFFFFF",
        textBackground: "#000",
        name: "bt_settings",
        position: 4
    }
];


/* class Dashboard  extends Component{
    render() {
        return(
            <View style={{ flex:1}}>
                <Header>
                    <Left>
                        <Icon name = "menu" />
                    </Left>
                </Header>
            </View>
        )
    }
} */

export default class DashboardScreen extends React.Component {
    state = { switchValue1: true };

    toggleSwitch1 = value => {
        this.setState({ switch1Value: value });
    };
    state = { switchValue2: true };

    toggleSwitch2 = value => {
        this.setState({ switch2Value: value });
    };

    onPressHeaderButton = () => {
        this.props.navigation.openDrawer()
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <View style={{ backgroundColor: '#F5F5F5', height: "100%", width: '100%' }}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false} >

                        <Components.MainHeader CustomDrawer={this.CustomDrawer} onPressHeaderButton={this.onPressHeaderButton} />


                        {/*                <View style={styles.HaderContainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                                <Image style={styles.hadImagesty} source={require('../../assets/Images/drawer.png')} />
                            </TouchableOpacity>
                            <Image
                                style={{ width: '40%', height: Dimensions.get('window').height / 22, paddingLeft: '50%' }}
                                source={require('../../assets/Images/Logo.png')} 
                            />
                            <TouchableOpacity style={{width: '15%', height: '50%', paddingLeft: '5%' }}>
                                <Image style={{width: '80%', height: '80%',}} source={require('../../assets/Images/Bell-64.png')} />
                            </TouchableOpacity>
                        </View> */}

                        <View style={styles.MainContainer}>
                            <View style={styles.Dastext}>
                                <Text style={{ fontSize: Utils.MethodUtils.increaseSize(20), fontWeight: 'bold', }}>
                                    Dashboard
                            </Text>
                            </View>
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.Ttext}>
                                        New Job
                                </Text>
                                </TouchableOpacity>
                                <View style={{ paddingHorizontal: 5 }} />
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.Ttext}>
                                        Print Label
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.MainSW}>
                            <View style={styles.Switch}>
                                <Text style={{ fontSize: 14, alignSelf: 'center' }}>
                                    Backup Cloud
                            </Text>
                                <Switch
                                    style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                                    onValueChange={this.toggleSwitch1}
                                    value={this.state.switch1Value}
                                />
                            </View>
                            <View style={styles.Switch}>
                                <Text style={{ fontSize: 14, paddingLeft: 13, alignSelf: 'center' }}>
                                    Online
                            </Text>
                                <Switch
                                    style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                                    onValueChange={this.toggleSwitch2}
                                    value={this.state.switch2Value}
                                />
                            </View>
                        </View>

                        <View style={{
                            marginTop: 20,
                            alignItems: "center",
                            flexDirection: 'row',
                            height: Dimensions.get('window').height / 5,
                            width: Dimensions.get('window').width / 1,
                        }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{ width: "100%" }} >
                                <View style={{
                                    height: '95%',
                                    width: Dimensions.get('window').width / 1.2,
                                    paddingHorizontal: "1.5%"
                                }}>
                                    <View style={styles.ViewText1}>
                                        <Text>
                                            Last Week
                                        </Text>
                                    </View>
                                    <View style={styles.ViewText2}>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                02
                                            </Text>
                                            <Text style={styles.inText2}>
                                                New
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                04
                                            </Text>
                                            <Text style={styles.inText2}>
                                                Loaded For Delivery
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                06
                                            </Text>
                                            <Text style={styles.inText2}>
                                                Delivered
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: '95%',
                                    width: Dimensions.get('window').width / 1.2,
                                    paddingHorizontal: "1.5%"
                                }}>
                                    <View style={styles.ViewText1}>
                                        <Text>
                                            This Week
                                        </Text>
                                    </View>
                                    <View style={styles.ViewText2}>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                02
                                            </Text>
                                            <Text style={styles.inText2}>
                                                New
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                04
                                            </Text>
                                            <Text style={styles.inText2}>
                                                Loaded For Delivery
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                06
                                            </Text>
                                            <Text style={styles.inText2}>
                                                Delivered
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: '95%',
                                    width: Dimensions.get('window').width / 1.2,
                                    paddingHorizontal: "1.5%"
                                }}>
                                    <View style={styles.ViewText1}>
                                        <Text>
                                            Next Week
                                        </Text>
                                    </View>
                                    <View style={styles.ViewText2}>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                02
                                            </Text>
                                            <Text style={styles.inText2}>
                                                New
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                04
                                            </Text>
                                            <Text style={styles.inText2}>
                                                Loaded For Delivery
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'center', }}>
                                            <Text style={styles.inText1}>
                                                06
                                            </Text>
                                            <Text style={styles.inText2}>
                                                Delivered
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>


                        <View style={{ flexDirection: "row", width: '100%', }}>
                            <View style={{ width: '35%', justifyContent: "center", }}>
                                <Text style={{ paddingLeft: '8%', fontSize: Utils.MethodUtils.increaseSize(20), fontWeight: 'bold' }}>
                                    Job History
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row", width: '65%', alignItems: 'center', justifyContent: "flex-end", paddingEnd: '3%', }}>
                                <Text style={{ fontSize: 12, paddingHorizontal: '2%' }}>
                                    This Week
                                </Text>
                                <Text style={{ fontSize: 12, paddingHorizontal: '2%' }}>
                                    This Month
                                </Text>
                                <Text style={{ fontSize: 12, paddingHorizontal: '2%' }}>
                                    This Year
                                </Text>
                                <Text style={{ fontSize: 12, paddingHorizontal: '2%' }}>
                                    Last Year
                                </Text>
                            </View>
                        </View>


                        <View style={{
                            height: Dimensions.get('window').height / 2,
                            width: '95%',
                            borderColor: '#E1E1E1',
                            borderWidth: 1,
                            marginVertical: '10%',
                            alignSelf: 'center',
                        }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column', width: '26%', alignItems: 'center', alignSelf: 'stretch' }}>
                                    <View style={styles.viewTitTx}>
                                        <Text style={{ fontWeight: 'bold', }}>
                                            Month
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            September 2019
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            October 2019
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            November 2019
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            December 2019
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            January 2018
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            February 2018
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            March 2018
                                    </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'column', width: '14%', alignItems: 'center', alignSelf: 'stretch' }}>
                                    <View style={styles.viewTitTx}>
                                        <Text style={{ fontWeight: 'bold', }}>
                                            Total
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            20
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            20
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            20
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            20
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            20
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            20
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            20
                                    </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'column', width: '9.5%', alignItems: 'center', alignSelf: 'stretch' }}>
                                    <View style={styles.viewTitTx}>
                                        <Text style={{ fontWeight: 'bold', }}>
                                            New
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            10
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            10
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            10
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            10
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            10
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            10
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            10
                                    </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'column', width: '33.5%', alignItems: 'center', alignSelf: 'stretch' }}>
                                    <View style={styles.viewTitTx}>
                                        <Text style={{ fontWeight: 'bold', }}>
                                            Loded For Delivery
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'column', width: '17%', alignItems: 'center', alignSelf: 'stretch' }}>
                                    <View style={styles.viewTitTx}>
                                        <Text style={{ fontWeight: 'bold', }}>
                                            Delivered
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt2}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                    <View style={styles.viewInTxt1}>
                                        <Text style={styles.tabInText1}>
                                            05
                                    </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <FloatingAction
                        actions={actions}
                        //buttonSize={Utils.MethodUtils.increaseSize(40)}
                        dismissKeyboardOnPress
                        onPressItem={(name) => {

                        }}

                        shadow={{ shadowOpacity: 0.35, shadowOffset: { width: 0, height: 0 }, shadowColor: "#000000", shadowRadius: 3 }}
                        color="#424242"
                        onPressItem={name => {
                            console.log(`selected button: ${name}`);
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    HaderContainer: {
        paddingHorizontal: '5%',
        alignItems: 'center',
        flexDirection: 'row',
        //   height: '10%',
        height: Dimensions.get('window').height / 10,
        width: "100%",
        backgroundColor: 'white'
    },
    hadImagesty: {
        paddingLeft: 10,
        width: 25,
        height: 40,
    },
    MainContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    Dastext: {
        paddingTop: '3%',
        alignItems: 'flex-start',
        paddingLeft: '3%',
    },
    button: {
        backgroundColor: '#444444',
        padding: 14,
        borderRadius: 4,
        justifyContent: 'center',
    },
    Ttext: {
        color: 'white',
        fontSize: Utils.MethodUtils.increaseSize(12),
        width: 60,
        fontWeight: 'bold',
        height: 15,
    },
    MainSW: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    Switch: {
        flexDirection: 'row',
    },
    ViewText1: {
        height: "25%",
        width: "100%",
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomColor: "#F5F5F5",
    },
    ViewText2: {
        height: "60%",
        width: "100%",
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: "6%",
        justifyContent: "center",
        backgroundColor: '#FFFFFF',
        alignContent: 'space-between',
    },
    inText1: {
        fontWeight: 'bold',
        alignItems: 'center',
        paddingHorizontal: "6%",
        fontSize: 16,
    },
    inText2: {
        fontSize: 10,
        paddingHorizontal: "6%",
    },
    viewTitTx: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 16.2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabInText1: {
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewInTxt1: {
        backgroundColor: '#F5F5F5',
        height: Dimensions.get('window').height / 16.2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewInTxt2: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 16.2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});