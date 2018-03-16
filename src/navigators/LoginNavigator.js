import { StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';

const routeConfig = {
  Home: {
    screen: LoginScreen,
  },
};

const navigationConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    title: 'Login',
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

const LoginNavigator = StackNavigator(routeConfig, navigationConfig);

export default LoginNavigator;
