import React from 'react';
import { View, Image, TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Config from '../../config/index'
import Utils from '../../utils/index'

TrackPlayer.setupPlayer(track).then(() => { });

var track = {
    id: 'abc',
    url: '',
    title: '',
}
// let state = await TrackPlayer.getState();

export default class AudioPlay extends React.Component {

    constructor(props) {
        super(props);
        //this.state = { isLoading: true }
    }

    // componentDidMount() {
    //     this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {

    //         const track = await TrackPlayer.getTrack(data.nextTrack);
    //         this.setState({ trackTitle: track.title });

    //     });
    // }

    render() {
        return (
            <View style={styles.Play}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#b1b1b1', true)}>

                    <View style={styles.playView}>
                        <Image
                            style={styles.playIMG}
                            resizeMode='contain'
                            source={
                                // this.state.showPassword ? (
                                require('../../assets/images/play.imageset/play.png')
                                // ) : (
                                //         require('../../assets/images/Pause.imageset/Pause.png')
                                //     )
                            }/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
})