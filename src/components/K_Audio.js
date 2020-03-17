import React from 'react';
import { StyleSheet, View, Text, StatusBar, Share, Image, TouchableNativeFeedback, ActivityIndicator, PixelRatio, Dimensions, FlatList } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import RNFS from 'react-native-fs';
import RNFileShare from 'react-native-file-share'
import RNFetchBlob from 'react-native-fetch-blob'
import SoundPlayer from 'react-native-sound-player'
import Config from "../config/index"
import Utils from "../utils/index"
TrackPlayer.setupPlayer().then(() => { });
export default class Audio extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        this.state = { isDone: false, };
        this.onDownloadAudioPress = this.onDownloadAudioPress.bind(this);
    }

    componentDidMount() {
        fetch('https://dev.3rddigital.com/keropok/api/audio', {
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

        this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {

            const track = await TrackPlayer.getTrack(data.nextTrack);
            this.setState({ trackTitle: track.title });
        });
    }

    onShare = async (URL) => {

        RNFS.downloadFile({
            fromUrl: URL,
            toFile: `${RNFS.DocumentDirectoryPath}/demo.mp3`,
        }).promise.then((r) => {
            this.setState({ isDone: true })
        });

        try {
            const result = await Share.share({
                //message: URL,
                //title: `hello`,
                //url: "https://reactnative.dev/img/tiny_logo.png",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };

    onDownloadAudioPress = async (file, audio) => {

        RNFS.downloadFile({
            fromUrl: file,
            toFile: `${RNFS.DocumentDirectoryPath}/j.mp3`,
        }).promise.then((r) => {
            this.setState({ isDone: true })
        });

        try {
            //  this.state.playSoundFile() ? (
              SoundPlayer.playSoundFile('j', 'mp3')
            // ) : ( 
            //     SoundPlayer.pauseSoundFile('j', 'mp3')
            // )
            //SoundPlayer.playUrl(toFile)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }

    }

    handlePlaySound = async (URL) => {
        try {
            let source = URL
            // let source = require('./assets/note1.wav')
            await soundObject.loadAsync(source)
            await soundObject
                .playAsync()
                .then(async playbackStatus => {
                    setTimeout(() => {
                        soundObject.unloadAsync()
                    }, playbackStatus.playableDurationMillis)
                })
                .catch(error => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
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
                keyExtractor={({ audio_id }) => audio_id}
                renderItem={({ item }) =>
                    <View style={styles.component}>

                        <View style={styles.Play}>
                            <TouchableNativeFeedback
                                //onPress={() => this.handlePlaySound(item.file)}
                                onPress={() => this.onDownloadAudioPress(item.file, item.audio)}
                                background={TouchableNativeFeedback.Ripple(Config.Constant.COLOR_TOUCHABLENATIVEFEEDBACK, true)}>

                                <View style={styles.playView}>
                                    <Image
                                        style={styles.playIMG}
                                        resizeMode='contain'
                                        source={
                                            // this.state.pauseSoundFile ? (
                                            require('../assets/images/play.imageset/play.png')
                                            // ) : (
                                            //         require('../assets/images/Pause.imageset/Pause.png')
                                            //     )
                                        } />
                                </View>
                            </TouchableNativeFeedback>
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
                            <TouchableNativeFeedback
                                style={styles.ShareView}
                                background={TouchableNativeFeedback.Ripple(Config.Constant.COLOR_TOUCHABLENATIVEFEEDBACK, true)}
                                onPress={() => this.onShare(item.file)}>

                                <View style={styles.playView}>
                                    <Image
                                        style={styles.ShareIMG}
                                        resizeMode='contain'
                                        source={
                                            require('../assets/images/Share.imageset/Share.png')
                                        } />
                                </View>
                            </TouchableNativeFeedback>
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
        elevation: 7,
        justifyContent: "space-evenly",
        marginBottom: '3%',
        marginTop: '1%'
    },
    PopularList: {
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    Play: {
        width: '15%',
        height: '83%',
        alignSelf: 'flex-start',
        justifyContent: "center",
        borderTopLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        borderBottomLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    },
    playView: {
        alignSelf: 'center',
        borderRadius: 100,
        width: '60%',
        height: '60%',
    },
    playIMG: {
        alignSelf: 'center',
        height: '100%',
        width: 20,
        tintColor: Config.Constant.COLOR_RED400
    },
    Song: {
        width: '70%',
        height: '80%',
        alignItems: 'flex-start',
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
        height: '83%',
        width: '15%',
        justifyContent: "center",
        alignItems: 'center',
        borderBottomRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        borderTopRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    },
    ShareView: {
        alignSelf: 'center',
        borderRadius: 100,
        width: '60%',
        height: '60%',
    },
    ShareIMG: {
        alignSelf: 'center',
        height: '100%',
        width: 23,
        tintColor: Config.Constant.COLOR_RED400
    },
}) 