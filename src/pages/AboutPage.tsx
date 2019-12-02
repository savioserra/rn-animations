import React from 'react';
import {StatusBar, Text} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import {NavigationDrawerProp} from 'react-navigation-drawer';

interface AboutPageProps {
  navigation: NavigationDrawerProp;
}

const AboutPage: React.FC<AboutPageProps> = ({navigation}) => {
  return (
    <>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

      <Container width="100%" height="100%" justify="center" items="center">
        <Text>React Native Animations Demo</Text>

        <Button style={{marginTop: 100}} onPress={() => navigation.openDrawer()}>
          <Text>Open Drawer!</Text>
        </Button>
      </Container>
    </>
  );
};

export default AboutPage;
