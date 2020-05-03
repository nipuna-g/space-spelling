import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import SpaceCadet from './assets/images/space-cadet.svg';
import Svg, {Path} from 'react-native-svg';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => (
  <>
    <StatusBar barStyle="dark-content" />

    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.header}>
          <Text
            style={{
              fontFamily: 'Racing Sans One',
              fontSize: 36,
              marginVertical: 20,
            }}>
            {'Good morning\nspace cadet!'}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <SpaceCadet height={130} />
            <View
              style={{
                alignSelf: 'center',
                marginLeft: 10,
              }}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>Next rank</Text>
              <Text style={{fontSize: 16, marginBottom: 8}}>
                Space crew member
              </Text>
              <Text style={{fontSize: 14, fontWeight: '200'}}>
                {'Add 5 new words\nPractice 5 days in a row'}
              </Text>
            </View>
          </View>
        </View>
        <MenuItem />
        <MenuItem />
        <View />
      </ScrollView>
    </SafeAreaView>
  </>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {fontFamily: 'Racing Sans One', fontSize: 24},
        }}>
        <Stack.Screen name="Spaced Spelling" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MenuItem = () => (
  <TouchableOpacity style={styles.menuItem}>
    <>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 2}}>
          Practice spellings
        </Text>
        <Text style={{fontSize: 16, fontWeight: '200'}}>
          6 words to practice for the day
        </Text>
      </View>
      <Svg
        style={{alignSelf: 'center'}}
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none">
        <Path
          d="M-2.06209e-06 18.03L1.77 19.8L11.67 9.89999L1.77 -1.05786e-05L-3.48358e-06 1.76999L8.13 9.89999L-2.06209e-06 18.03Z"
          fill="#232F6B"
        />
      </Svg>
    </>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F8FAFF',
    padding: 15,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default App;
