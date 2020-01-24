import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';

const PrivateStack = createStackNavigator(
  {
    Home: Home
  },
  {
    // initialRouteName: 'Recovery',
    headerMode: 'none'
  }
);

export default PrivateStack;
