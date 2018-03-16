import { StackNavigator } from 'react-navigation';

import EmployeeScreen from '../screens/EmployeeScreen';

const routeConfig = {
  Home: {
    screen: EmployeeScreen,
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
