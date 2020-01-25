import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import InitiativeStack from './InitiativeStack';
import SideBar from '../components/SideBar';

const PrivateRoutes = createDrawerNavigator(
  {
    InitiativeStack: InitiativeStack
  },
  {
    // initialRouteName: '',
    drawerType: 'slide',
    headerMode: 'none',
    drawerPosition: 'left',
    overlayColor: 'rgba(0,0,0,0.6)',
    contentComponent: props => <SideBar {...props} />
  }
);

export default PrivateRoutes;
