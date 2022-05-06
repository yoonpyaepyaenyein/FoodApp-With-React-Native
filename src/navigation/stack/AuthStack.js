import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchScreen from '../../pages/auth/Search/SearchScreen';
import DetailScreen from '../../pages/auth/Detail/DetailScreen';
import ResultsShowScreen from '../../pages/auth/showResult/ResultsShowScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Business Search" component={SearchScreen} />
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

// screenOptions={{headerShown: false}}
