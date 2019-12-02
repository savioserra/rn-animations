import {Image, TouchableOpacity, TouchableOpacityProps, ImageProps} from 'react-native';
import Animated from 'react-native-reanimated';
import {Circle, CircleProps} from 'react-native-svg';

export const ReanimatedImage = Animated.createAnimatedComponent(Image);

export const ReanimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const ReanimatedCircle = Animated.createAnimatedComponent(Circle);
