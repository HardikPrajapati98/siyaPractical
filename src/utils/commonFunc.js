import {Dimensions, Platform, PixelRatio} from 'react-native';
export const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const fontScale = PixelRatio.getFontScale();

export const getFontSize = size => size / fontScale;

export const responsiveWidth = width => {
    return (Dimensions.get('window').width * width) / SCREEN_WIDTH;
};

export const responsiveHeight = height => {
    return (Dimensions.get('window').height * height) / SCREEN_HEIGHT;
};



