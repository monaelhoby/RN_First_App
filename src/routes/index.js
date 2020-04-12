import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


const Drawer = createDrawerNavigator({
    Home : {
        screen : HomeStack
    },
    About : {
        screen : AboutStack
    }
});

export default createAppContainer(Drawer)

