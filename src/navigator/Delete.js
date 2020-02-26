const StackHome = createStackNavigator(
    {
        Home: Home,
        CustomHide: CustomHide,
    });

StackHome.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName === "CustomHide") {
                tabBarVisible = false;
            } else {
                tabBarVisible = true;
            }
        });
    }

    return {
        tabBarVisible
    };
};