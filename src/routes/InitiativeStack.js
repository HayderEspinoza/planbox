import { createStackNavigator } from 'react-navigation';
import Initiatives from '../screens/Initiatives';
import Iterations from '../screens/Iterations';
import ItemDetail from '../screens/ItemDetail';

const InitiativeStack = createStackNavigator(
  {
    Initiatives: Initiatives,
    Iterations: Iterations,
    ItemDetail: ItemDetail
  },
  {
    // initialRouteName: 'ChangePassword',
    headerMode: 'none'
  }
);

export default InitiativeStack;
