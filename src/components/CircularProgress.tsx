import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {useMemo} from 'react';
import {ReanimatedCircle} from '../utils/ReanimatedComponents';
import {spring} from 'react-native-redash';
import Animated from 'react-native-reanimated';
import Container from './Container';

const {Value, multiply, set, useCode, sub} = Animated;

interface CircularProgressProps {
  circleSize: number;
  strokeWidth: number;
  progress: number;

  strokeColor: string;
  strokeBackground: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  circleSize,
  strokeWidth,
  strokeColor,
  progress,
  strokeBackground,
  children,
}) => {
  const radius = useMemo(() => (circleSize - strokeWidth) / 2, [circleSize, strokeWidth]);
  const fullArc = useMemo(() => radius * 2 * Math.PI, [radius]);
  const center = useMemo(() => circleSize / 2, [circleSize]);
  const animatedProgress = useMemo<Animated.Value<number>>(
    () => new Value((1 - progress) * fullArc),
    [],
  );

  useCode(
    () =>
      set(
        animatedProgress,
        spring({
          to: multiply(sub(1, progress), fullArc),
          from: animatedProgress,
          config: {damping: 12},
        }),
      ),
    [progress],
  );

  return (
    <Container justify="center" items="center" height={circleSize} width={circleSize}>
      {children}
      <Svg width={circleSize} height={circleSize} style={{position: 'absolute'}}>
        <Circle
          r={radius}
          fill="none"
          cx={center}
          cy={center}
          originX={center}
          originY={center}
          stroke={strokeBackground}
          strokeWidth={strokeWidth}
          strokeDasharray={`${fullArc} ${fullArc}`}
        />
        <ReanimatedCircle
          r={radius}
          fill="none"
          cx={center}
          cy={center}
          originX={center}
          originY={center}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${fullArc} ${fullArc}`}
          strokeDashoffset={animatedProgress}></ReanimatedCircle>
      </Svg>
    </Container>
  );
};

export default CircularProgress;
