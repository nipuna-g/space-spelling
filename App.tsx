import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '@pages/Home';

const Stack = createStackNavigator();

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

export default App;
