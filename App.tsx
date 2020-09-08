/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import 'react-native-gesture-handler';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'All Indexes'}}
        />
        <Stack.Screen
          name="Index"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.item.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
