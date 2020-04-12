
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login'
import Welcome from '../screens/welcome'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'
import {colors} from '../constants/themes'

const screens = {
  Welcome : {
    screen: Welcome,
    navigationOptions: {
      header: null,
    }
  } ,
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      // title: null,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      // title: null,
    }
  }, 
  Home : {
    screen: Home,
    navigationOptions: {
      // title: null,
    }
  } ,
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerStyle: {
         backgroundColor: colors.primary, 
        //  elevation : 0 //for android
         },
      headerBackTitle : null,
      headerLeftContainerStyle : {
        alignItems : 'center',
        marginLeft :  2,
        paddingRight : 2
      } ,
      headerRightContainerStyle : {},
    }
  });

  export default HomeStack


