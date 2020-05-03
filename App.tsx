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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const HomeNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontFamily: 'Racing Sans One', fontSize: 24},
    }}>
    <Stack.Screen name="Spaced Spelling" component={Home} />
  </Stack.Navigator>
);

export default App;
