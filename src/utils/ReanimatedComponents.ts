import {Image, TouchableOpacity, TouchableOpacityProps, ImageProps} from 'react-native';
import Animated from 'react-native-reanimated';
import {Circle} from 'react-native-svg';
import Container from '../components/Container';

export const ReanimatedImage = Animated.createAnimatedComponent(Image);

export const ReanimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const ReanimatedCircle = Animated.createAnimatedComponent(Circle);

export const ReanimatedContainer = Animated.createAnimatedComponent(Container);
