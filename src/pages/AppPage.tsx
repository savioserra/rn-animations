import React, {useState, useEffect} from 'react';
import {StatusBar, Slider, Button, Text} from 'react-native';
import Container from '../components/Container';
import CircularProgress from '../components/CircularProgress';

const AboutPage = ({navigation}) => {
  const [progress, setProgress] = useState(0.2);

  useEffect(() => {
    navigation.openDrawer();
  }, []);

  return (
    <>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

      <Container height="100%" width="100%" justify="center" items="center">
        <CircularProgress
          progress={progress}
          strokeWidth={10}
          circleSize={300}
          strokeColor="green"
          strokeBackground="rgb(0, 0, 0, 0.2)"
        />

        <Slider
          style={{width: 300, marginTop: 50}}
          onSlidingComplete={setProgress}
          value={progress}
        />
      </Container>
    </>
  );
};

export default AboutPage;
