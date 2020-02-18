import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, PixelRatio, Dimensions } from 'react-native';

import Config from "../config/index"
import Utils from "../utils/index"

export default class Audio extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    render() {
        return (
            <View style={styles.component}>

                <View style={styles.Play}>
                    <TouchableOpacity
                        style={styles.playView}
                    // onPress={() => {
                    //     debugger
                    //     this.setState({ showPassword: !this.state.showPassword });
                    // }}
                    >
                        <Image
                            style={styles.playIMG}
                            resizeMode='contain'
                            source={
                                // this.state.showPassword ? (
                                require('../assets/images/play.imageset/play.png')
                                // ) : (
                                //         require('../assets/images/Pause.imageset/Pause.png')
                                //     )
                            }
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.Song}>
                    <View style={styles.SongTitle}>
                        <Text style={styles.titleTxt} />
                    </View>
                    <View style={styles.SongDuration}>
                        <Text style={styles.DurationTxt} />
                    </View>
                </View>


                <View style={styles.Share}>
                    <TouchableOpacity
                        style={styles.ShareView}
                    // onPress={() => {
                    //     debugger
                    //     this.setState({ showPassword: !this.state.showPassword });
                    // }}
                    >
                        <Image
                            style={styles.ShareIMG}
                            resizeMode='contain'
                            source={
                                // this.state.showPassword ? (
                                require('../assets/images/Share.imageset/Share.png')
                                // ) : (
                                //         require('../assets/images/Pause.imageset/Pause.png')
                                //     )
                            }
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        height: '9%',
        width: '90%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        elevation: 10,
        justifyContent: "space-evenly",
    },
    Play: {
        height: '100%',
        width: '10%',
        justifyContent: "center",
        alignItems: 'center',
        borderTopLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        borderBottomLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    },
    Song: {
        flexDirection: 'row',
        height: '100%',
        width: '80%',
        justifyContent: "center",
        alignItems: 'center',
    },
    Share: {
        height: '100%',
        width: '10%',
        justifyContent: "center",
        alignItems: 'center',
        borderBottomRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        borderTopRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    },
    playView: {
        alignSelf: 'flex-end',
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
    },
    playIMG: {
        alignSelf: 'center',
        height: '100%',
        width: 20,
        tintColor: Config.Constant.COLOR_RED400
    },
    ShareView: {
        alignSelf: 'flex-start',
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
    },
    ShareIMG: {
        alignSelf: 'center',
        height: '100%',
        width: 23,
        tintColor: Config.Constant.COLOR_RED400
    },
}) 