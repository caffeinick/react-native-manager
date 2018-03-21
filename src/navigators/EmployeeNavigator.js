import { StackNavigator } from 'react-navigation';

import EmployeeScreen from '../screens/EmployeeScreen';
import EmployeeCreateScreen from '../screens/EmployeeCreateScreen';
import EmployeeDetailNavigator from './EmployeeDetailNavigator';

const routeConfig = {
  Home: {
    screen: EmployeeScreen,
  },
  Create: {
    screen: EmployeeCreateScreen,
  },
  Detail: {
    screen: EmployeeDetailNavigator,
  },
};

const navigationConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    title: 'Employee',
    headerStyle: {
      backgroundColor: 'teal',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }
  }
};

const EmployeeNavigator = StackNavigator(routeConfig, navigationConfig);

export default EmployeeNavigator;
