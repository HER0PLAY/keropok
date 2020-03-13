import React from 'react';
import { View, Image, TouchableNativeFeedback, TouchableOpacity, Share, StyleSheet } from 'react-native';
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

    onShare = async (file) => {
        try {
            const result = await Share.share({
                // message:
                // `ss`,
                url: file
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        return (

            <View style={styles.Share}>
                <TouchableNativeFeedback
                    style={styles.ShareView}
                    background={TouchableNativeFeedback.Ripple('#b1b1b1', true)}
                    onPress={() => { this.onShare }}>

                    <View style={styles.playView}>
                        <Image
                            style={styles.ShareIMG}
                            resizeMode='contain'
                            source={
                                require('../../assets/images/Share.imageset/Share.png')
                            } />
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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