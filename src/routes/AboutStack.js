import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import {colors} from '../constants/themes'

const screens = {
  About: {
    screen: About,
    navigationOptions: {
    },
  },
}

const AboutStack = createStackNavigator(screens, {
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

export default AboutStack;