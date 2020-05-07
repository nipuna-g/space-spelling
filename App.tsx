import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import SideMenu from '@components/SideMenu';
import {
  HomeNavigation,
  AboutNavigator,
  SettingNavigator,
} from '@components/StackNavigator';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.warn(user);
    });

    auth().signInAnonymously();

    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigation} />
        <Drawer.Screen name="About" component={AboutNavigator} />
        <Drawer.Screen name="Setting" component={SettingNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
