import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ActivityIndicator, PixelRatio, Dimensions, FlatList } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Config from "../config/index"
import Utils from "../utils/index"
TrackPlayer.setupPlayer().then(() => { });
export default class AudioPopular extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        fetch('https://dev.3rddigital.com/keropok/api/popular_audio', {
            method: 'POST',
            headers: {
                AuthorizationUser: 'eyJpdiI6Iml5aW5UYk9oZzRYcFJ1NkxEZFloTkE9PSIsInZhbHVlIjoiSnFLb3pRdURERjJaOGhUQUgzMklKcU1HaFNjZmlFWXJzbGtHbTE1VnBnQ0lxU1lyVUo3NVpGZndJQjR2THhEVCIsIm1hYyI6ImM4YzVlNWU2M2U3MDM5YmMyYjdkZTdlMjY3ZTMyNTczMjVhYTc4N2RhZWFlNDQ3ZjJiZjhkOTQ4MDk4Y2I4YzgifQ==',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                });  //alert(JSON.stringify(responseJson))
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <FlatList
                style={styles.PopularList}
                data={this.state.dataSource}
                keyExtractor={({audio_id}) => audio_id}
                renderItem={({ item }) =>
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
                                <Text style={styles.titleTxt}>
                                    {/* HUH! YOU DID WHAT */}
                                    {item.audio}
                                </Text>
                            </View>

                            <View style={styles.SongDuration}>
                                <Text style={styles.DurationTxt}>
                                    {/* 00:02 */}
                                    {item.duration}
                                </Text>
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
                } />
        )
    }
}

const styles = StyleSheet.create({
    component: {
        height: 70,
        width: '90%',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        elevation: 10,
        justifyContent: "space-evenly",
        marginVertical: '2%'
    },
    PopularList:{
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    Play: {
        width: '10%',
        height: '100%',
        paddingBottom: '10%',
        alignItems: 'center',
        justifyContent: "center",
        borderTopLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        borderBottomLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    },
    Song: {
        width: '80%',
        height: '80%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    SongTitle: {
        paddingTop: 9,
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
        justifyContent: "center",
        height: '50%',
        width: '80%',
    },
    SongDuration: {
        paddingBottom: 9,
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
        justifyContent: "center",
        height: '50%',
        width: '80%',
    },
    titleTxt: {
        color: Config.Constant.COLOR_SONG_TXT,
        fontFamily: Config.Constant.FONT_AVE_HEAVY,
        fontSize: Utils.MethodUtils.increaseSize(18),
    },
    DurationTxt: {
        color: Config.Constant.COLOR_SBAR_TXT,
        fontFamily: Config.Constant.FONT_AVE_MEDIUM,
        fontSize: Utils.MethodUtils.increaseSize(14),
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