import { SwitchNavigator } from 'react-navigation';

import LoginStack from './LoginNavigator';
import MainStack from './MainNavigator';

const routeConfig = {
  Login: {
    screen: LoginStack
  },
  Main: {
    screen: MainStack
  }
};

const navigationConfig = {
  initialRouteName: 'Login',
};

const RootNavigator = SwitchNavigator(routeConfig, navigationConfig);

export default RootNavigator;
