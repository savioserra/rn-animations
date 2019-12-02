import React, {useState} from 'react';
import {StatusBar, Slider, Image} from 'react-native';
import Container from '../components/Container';
import CircularProgress from '../components/CircularProgress';

const placeholderImage =
  'https://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png';

const tintColor = '#61dafb';

const IndicatorPage: React.FC = () => {
  const [progress, setProgress] = useState(0.5);

  return (
    <>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

      <Container height="100%" width="100%" justify="center" items="center">
        <CircularProgress
          progress={progress}
          strokeWidth={10}
          circleSize={300}
          strokeColor={tintColor}
          strokeBackground="rgb(0, 0, 0, 0.2)">
          <Image style={{height: 250, width: 250}} source={{uri: placeholderImage}} />
        </CircularProgress>

        <Slider
          style={{width: 300, marginTop: 50}}
          onSlidingComplete={setProgress}
          thumbTintColor={tintColor}
          maximumTrackTintColor={tintColor}
          minimumTrackTintColor={tintColor}
        />
      </Container>
    </>
  );
};

export default IndicatorPage;
