import {createBottomTabNavigator} from 'react-navigation';

import Home from './Home';
import Profile from './Profile';

const AppStack = createBottomTabNavigator({
  Home,
  Profile
}, {
    initialRouteName: 'Home'
})

export default AppStack;