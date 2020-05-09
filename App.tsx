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
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');
const Drawer = createDrawerNavigator();

const checkUserLogIn = async (user: FirebaseAuthTypes.User) => {
  let userDoc = await usersCollection.doc(user?.uid).get();
  console.warn(userDoc.exists);

  if (!userDoc.exists) {
    await usersCollection.doc(user.uid).set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  }
};

const App = () => {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) {
        checkUserLogIn(user);
      }
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
