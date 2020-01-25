import { createSwitchNavigator } from 'react-navigation';
import Loading from '../screens/Loading';
import AuthStack from './AuthStack';
import PrivateRoutes from './PrivateRoutes';

const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    AuthStack: AuthStack,
    PrivateRoutes: PrivateRoutes
  },
  {
    // initialRouteName: 'PrivateRoutes'
  }
);

export default RootStack;
