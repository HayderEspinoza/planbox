import { createStackNavigator } from 'react-navigation';
import Initiatives from '../screens/Initiatives';
import Iterations from '../screens/Iterations';

const InitiativeStack = createStackNavigator(
  {
    Initiatives: Initiatives,
    Iterations: Iterations
  },
  {
    // initialRouteName: 'ChangePassword',
    headerMode: 'none'
  }
);

export default InitiativeStack;
