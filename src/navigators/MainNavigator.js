import { SwitchNavigator } from 'react-navigation';

import LoginStack from './LoginNavigator';
import EmployeeStack from './EmployeeNavigator';

const routeConfig = {
  Login: {
    screen: LoginStack
  },
  Employee: {
    screen: EmployeeStack
  }
};

const navigationConfig = {
  initialRouteName: 'Employee',
};

const MainNavigator = SwitchNavigator(routeConfig, navigationConfig);

export default MainNavigator;
