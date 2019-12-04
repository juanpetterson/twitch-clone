import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fff',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        backBehavior="none"
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={DashboardRoutes} />
    </Stack.Navigator>
  );
}

export default Routes;
