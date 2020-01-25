import { createStackNavigator } from 'react-navigation';
import Initiatives from '../screens/Initiatives';

const InitiativeStack = createStackNavigator(
  {
    Initiatives: Initiatives
  },
  {
    // initialRouteName: 'ChangePassword',
    headerMode: 'none'
  }
);

export default InitiativeStack;
