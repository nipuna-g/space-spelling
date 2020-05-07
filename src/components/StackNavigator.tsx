import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {HamburgerMenu} from '@assets/images/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackButton from '@assets/images/back-button.svg';
import {StyleSheet} from 'react-native';
import Home from '@pages/Home';
import About from '@pages/About';
import AddWord from '@pages/AddWord';
import Practice from '@pages/Practice';
import Review from '@pages/Review';
import Summary from '@pages/Summary';
import Setting from '@pages/Setting';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

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
            style={styles.menu}
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
        headerTitleStyle: {
          fontFamily: 'Racing Sans One',
          fontSize: 24,
          color: '#232F6B',
        },
      }}>
      {children}
    </Stack.Navigator>
  );
};

export const HomeNavigation = ({navigation}: {navigation: any}) => (
  <CommonStackNavigator navigation={navigation}>
    <Stack.Screen name="Spaced Spelling" component={Home} />
    <Stack.Screen name="Add Word" component={AddWord} />
    <Stack.Screen name="Practice" component={Practice} />
    <Stack.Screen name="Review" component={Review} />
    <Stack.Screen name="Summary" component={Summary} />
  </CommonStackNavigator>
);

export const AboutNavigator = ({navigation}: {navigation: any}) => (
  <CommonStackNavigator navigation={navigation}>
    <Stack.Screen name="About" component={About} />
  </CommonStackNavigator>
);

export const SettingNavigator = ({navigation}: {navigation: any}) => (
  <CommonStackNavigator navigation={navigation}>
    <Stack.Screen name="Setting" component={Setting} />
  </CommonStackNavigator>
);

const styles = StyleSheet.create({
  menuHeaderBackground: {backgroundColor: '#232F6B'},
  menu: {
    padding: 10,
  },
});
