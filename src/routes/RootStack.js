import { createSwitchNavigator } from 'react-navigation';
import Loading from '../screens/Loading';
import AuthStack from './AuthStack';
import PrivateStack from './PrivateStack';

const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    AuthStack: AuthStack,
    PrivateStack: PrivateStack
  },
  {
    // initialRouteName: 'PrivateStack'
  }
);

export default RootStack;
