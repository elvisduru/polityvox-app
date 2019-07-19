import {createStackNavigator} from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthStack = createStackNavigator({
  SignIn,
  SignUp
}, {
  initialRouteName: 'SignIn',
  headerMode: "none"
});

export default AuthStack;