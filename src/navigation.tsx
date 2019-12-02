import React from 'react';
import {createAppContainer, ScrollView} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import IndicatorPage from './pages/IndicatorPage';
import AboutPage from './pages/AboutPage';

const Drawer = props => (
  <ScrollView contentContainerStyle={{paddingTop: 50}}>
    <DrawerItems {...props} />
  </ScrollView>
);

const App = createAppContainer(
  createDrawerNavigator(
    {
      About: AboutPage,
      Indicator: IndicatorPage,
    },
    {
      initialRouteName: 'About',
      drawerType: 'front',
      contentComponent: Drawer,
    },
  ),
);

export default App;
