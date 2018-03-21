import { StackNavigator } from 'react-navigation';

import EmployeeDetailScreen from '../screens/EmployeeDetailScreen';
import EmployeeDeleteScreen from '../screens/EmployeeDeleteScreen';

const routeConfig = {
  Home: {
    screen: EmployeeDetailScreen,
  },
  DelModal: {
    screen: EmployeeDeleteScreen,
  },
}

const navigationConfig = {
  mode: 'modal',
  headerMode: 'none',
}

const EmployeeDetailNavigator = StackNavigator(routeConfig, navigationConfig);

export default EmployeeDetailNavigator;
