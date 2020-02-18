import {
    PixelRatio,
    Platform,
    StatusBar,
    Dimensions
} from "react-native";

const decreaseSize = (width) => {
    if (isTablet()) {
        return width * 0.8;
    } else {
        return width;
    }
}

const increaseSize = (size) => {
    if (isTablet()) {
        return size * 1.6
    } else {
        return size;
    }
}

const isTablet = () => {
    let pixelDensity = PixelRatio.get();
    const adjustedWidth = Constant.SCREEN_WIDTH * pixelDensity;
    const adjustedHeight = Constant.SCREEN_HEIGHT * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else {
        return (
            pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
        );
    }
}

const getStatusBarHeight = safe => {
    const dimen = Dimensions.get("window");

    if (Platform.OS === "ios") {
        if (!Platform.isPad &&
            !Platform.isTVOS &&
            (dimen.height === 812 ||
                dimen.width === 812 ||
                dimen.height === 896 ||
                dimen.width === 896)
        ) {
            return 44
        } else {
            return 20
        }
    } else {
        return StatusBar.currentHeight
    }
};

const isIphoneX = () => {
    const dimen = Dimensions.get("window");

    return (
        Platform.OS === "ios" &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 ||
            dimen.width === 812 ||
            dimen.height === 896 ||
            dimen.width === 896)
    );
};

const emailValidation = (email) => {
    var emailString = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.+[A-Za-z]{2,64}"

    if (email == "") {
        alert("Email not entered.")
    } else if (!email.match(emailString)) {
        alert("Email format not valid.")
    }

    return email.match(emailString)
}

const passwordValidation = (password) => {

    if (password == "") {
        alert("Password not entered.")
    } else if (password.length < 6) {
        alert("Password format not valid.")
    }

    return password.length >= 6

}


export default {
    decreaseSize,
    increaseSize,
    isTablet,
    getStatusBarHeight,
    isIphoneX,
    emailValidation,
    passwordValidation
}