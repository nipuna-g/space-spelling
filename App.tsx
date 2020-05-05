import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from '@pages/Home';
import About from '@pages/About';
import {HamburgerMenu} from '@assets/images/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SpaceCadet from '@assets/images/space-cadet.svg';
import BackButton from '@assets/images/back-button.svg';
import {View, Text, StyleSheet} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import AddWord from '@pages/AddWord';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        hideStatusBar={true}
        drawerContent={(props) => (
          <>
            <DrawerContentScrollView
              {...props}
              style={styles.menuHeaderBackground}>
              <View style={styles.menuHeaderBackground}>
                <Text style={styles.menuHeaderTitle}>Spaced Spelling</Text>
                <View style={styles.menuHeaderImage}>
                  <SpaceCadet />
                </View>
              </View>
              <View style={styles.drawerContainer}>
                <DrawerItemList
                  {...props}
                  activeTintColor="#232F6B"
                  itemStyle={styles.drawerItem}
                  labelStyle={styles.drawerLabel}
                />
              </View>
            </DrawerContentScrollView>
            <View style={styles.drawerBottom}>
              <View style={styles.drawerLoginSection}>
                <Text>Login</Text>
              </View>
            </View>
          </>
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
    <Stack.Screen name="Add Word" component={AddWord} />
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
  navigation: DrawerNavigationProp<any>;
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ({canGoBack}) => (
          <TouchableOpacity
            onPress={() => {
              if (canGoBack) {
                navigation.goBack();
              } else {
                navigation.openDrawer();
              }
            }}>
            {!canGoBack ? <HamburgerMenu /> : <BackButton />}
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

const styles = StyleSheet.create({
  menuHeaderBackground: {backgroundColor: '#232F6B'},
  menuHeaderTitle: {
    fontFamily: 'Racing Sans One',
    fontSize: 24,
    alignSelf: 'center',
    color: '#fff',
  },
  menuHeaderImage: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  drawerContainer: {backgroundColor: '#fff', minHeight: 300},
  drawerItem: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginLeft: 40,
  },
  drawerLabel: {fontSize: 18, textAlign: 'center'},
  drawerBottom: {flex: 1, justifyContent: 'flex-end', backgroundColor: '#fff'},
  drawerLoginSection: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F8FAFF',
    paddingBottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
