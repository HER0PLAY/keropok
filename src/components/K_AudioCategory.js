import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, PixelRatio, Dimensions, FlatList, ActivityIndicator } from 'react-native';

import Config from "../config/index"
import Utils from "../utils/index"

export default class AudioCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        fetch('https://dev.3rddigital.com/keropok/api/audio_category', {
            method: 'GET',
            headers: {
                AuthorizationUser: 'eyJpdiI6Iml5aW5UYk9oZzRYcFJ1NkxEZFloTkE9PSIsInZhbHVlIjoiSnFLb3pRdURERjJaOGhUQUgzMklKcU1HaFNjZmlFWXJzbGtHbTE1VnBnQ0lxU1lyVUo3NVpGZndJQjR2THhEVCIsIm1hYyI6ImM4YzVlNWU2M2U3MDM5YmMyYjdkZTdlMjY3ZTMyNTczMjVhYTc4N2RhZWFlNDQ3ZjJiZjhkOTQ4MDk4Y2I4YzgifQ==',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                });
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
            <View style={styles.MainView}>
                <FlatList
                    horizontal={true}
                    data={this.state.dataSource}
                    refreshing={this.state.refreshing}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <View style={styles.Tags}>
                        <TouchableOpacity>
                            <Text style={styles.TagTxt}>{item.name} </Text>
                        </TouchableOpacity>
                    </View>}
                    style={styles.MainTagView}
                    keyExtractor={({audio_id}) => audio_id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        alignItems: 'center'
    },
    MainTagView: {
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    Tags: {
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
        flexDirection: 'row',
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: Config.Constant.COLOR_TAG_BORDER,
        borderWidth: 1.5,
        alignSelf: 'center',
        marginHorizontal: 3,
    },
    TagTxt: {
        marginHorizontal: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        color: Config.Constant.COLOR_BACKGROUND_AD,
        fontSize: Utils.MethodUtils.increaseSize(18),
        fontFamily: Config.Constant.FONT_AVE_MEDIUM,
    },
})