import React, {useMemo} from 'react';
import {ViewStyle} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {ReanimatedContainer} from '../utils/ReanimatedComponents';
import {interpolateColor, loop} from 'react-native-redash';

const {useCode, Value, set, Clock, cond, startClock, stopClock, eq, onChange} = Animated;

interface ButtonProps {
  style: ViewStyle;
  disabled?: boolean;

  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({children, disabled, onPress, style}) => {
  const colorAnimation = useMemo(() => new Value(0), []);
  const animationState = useMemo(
    () => ({isPlaying: true, value: new Value(1), clock: new Clock()}),
    [],
  );

  const color = interpolateColor(colorAnimation, {
    inputRange: [0, 1],
    outputRange: [
      {r: 0, g: 0, b: 0},
      {r: 255, g: 255, b: 255},
    ],
  });

  useCode(
    () =>
      onChange(
        animationState.value,
        cond(
          eq(animationState.value, 0),
          stopClock(animationState.clock),
          startClock(animationState.clock),
        ),
      ),
    [animationState],
  );

  useCode(
    () =>
      set(
        colorAnimation,
        loop({
          duration: 300,
          boomerang: true,
          autoStart: false,
          clock: animationState.clock,
        }),
      ),
    [animationState],
  );

  const toggle = () => {
    animationState.value.setValue(animationState.isPlaying ? 0 : 1);
    animationState.isPlaying = !animationState.isPlaying;
  };

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      style={style}
      onPress={() => {
        toggle();
        onPress();
      }}>
      <ReanimatedContainer
        ph={8}
        pv={4}
        style={{backgroundColor: color}}
        borderRadius={3}>
        {children}
      </ReanimatedContainer>
    </TouchableWithoutFeedback>
  );
};

export default Button;
