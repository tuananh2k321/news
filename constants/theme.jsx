import { Dimensions } from "react-native";

const { width, height} = Dimensions.get('screen')

export const COLOR = {
    primary: '#1877F2',
    title: '#000000',
    description: '#4E4B66',
    buttonDisabled: '#DDDDDD'
}

export const SIZES = {
    h1: 26,
    h2: 24,
    h3: 22,
    h4: 20,
    h5: 18,
    h6: 16,
    width,
    height
}

export const ICON = {
    eyeSpeech: require('../assets/Icon/icon-eye-speech.png'),
    closeEye: require('../assets/Icon/icons8-closed-eyes-48.png'),
    facebook: require('../assets/Icon/icons8-facebook-48.png'),
    google: require('../assets/Icon/icons8-google-48.png'),
    home: require('../assets/Icon/icons8-home-page-50.png'),
    explore: require('../assets/Icon/icons8-compass-50.png'),
    bookmark: require('../assets/Icon/icons8-favorites-50.png'),
    profile: require('../assets/Icon/icons8-test-account-50.png'),
    notification: require('../assets/Icon/icons8-notification-48.png'),
    search: require('../assets/Icon/icons8-search-50.png'),
    filter: require('../assets/Icon/icons8-filter-48.png'),
    clock: require('../assets/Icon/icons8-wall-clock-24.png'),
    ellipsis: require('../assets/Icon/icons8-ellipsis-30.png'),
    close: require('../assets/Icon/icons8-close-50.png'),
    done: require('../assets/Icon/icons8-done-50.png'),
    favorite: require('../assets/Icon/icons8-favorite-50.png'),
    favorites: require('../assets/Icon/icons8-bookmark-30.png'),
    connect: require('../assets/Icon/icons8-connect-50.png'),
    left: require('../assets/Icon/icons8-left-50.png'),
    menuVertical: require('../assets/Icon/icons8-menu-vertical-48.png'),
    comment: require('../assets/Icon/icons8-comments-64.png'),
    setting: require('../assets/Icon/icons8-settings-50.png'),
    email: require('../assets/img/icons8-mail-50.png'),
    okhoa: require('../assets/img/icons8-keepass-50.png'),
}

export const IMAGES = {
    logo: require('../assets/img/title-app.png')
}

