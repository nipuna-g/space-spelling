import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from '@pages/Home';
import About from '@pages/About';
import {HamburgerMenu} from '@assets/images/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        hideStatusBar={true}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        )}>
        <Drawer.Screen name="Home" component={HomeNavigation} />
        <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const HomeNavigation = ({navigation}: {navigation: any}) => (
  <CommonStackNavigator navigation={navigation}>
    <Stack.Screen name="Spaced Spelling" component={Home} />
  </CommonStackNavigator>
);

const AboutNavigator = ({navigation}: {navigation: any}) => (
  <CommonStackNavigator navigation={navigation}>
    <Stack.Screen name="About" component={About} />
  </CommonStackNavigator>
);

const CommonStackNavigator = ({
  children,
  navigation,
}: {
  children: Element;
  navigation: any;
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <HamburgerMenu />
          </TouchableOpacity>
        ),
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerTitleStyle: {fontFamily: 'Racing Sans One', fontSize: 24},
      }}>
      {children}
    </Stack.Navigator>
  );
};

export default App;
