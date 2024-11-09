import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../pages/Started';
import {SignIn} from '../pages/SignIn';
import {SelectContent} from '../pages/SelectContent';
import {BusinessDetailForm} from '../pages/BusinessDetailForm';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SelectContent" component={SelectContent} />
      <Stack.Screen name="BusinessDetailForm" component={BusinessDetailForm} />
    </Stack.Navigator>
  );
};

export default Router;
