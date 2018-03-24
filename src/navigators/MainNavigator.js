import { StackNavigator } from 'react-navigation';

import EmployeeStack from './EmployeeNavigator';
import EmployeeDeleteScreen from '../screens/EmployeeDeleteScreen';

const routeConfig = {
  Home: {
    screen: EmployeeStack,
  },
  DelModal: {
    screen: EmployeeDeleteScreen,
  },
}

const navigationConfig = {
  mode: 'modal',
  headerMode: 'none',
}

const MainNavigator = StackNavigator(routeConfig, navigationConfig);

export default MainNavigator;
