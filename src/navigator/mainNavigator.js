import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen016774Navigator from '../features/BlankScreen016774/navigator';
import BlankScreen116773Navigator from '../features/BlankScreen116773/navigator';
import CopyOfBlankScreen116772Navigator from '../features/CopyOfBlankScreen116772/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen016774: { screen: BlankScreen016774Navigator },
BlankScreen116773: { screen: BlankScreen116773Navigator },
CopyOfBlankScreen116772: { screen: CopyOfBlankScreen116772Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
