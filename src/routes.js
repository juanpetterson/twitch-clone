import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Following from './pages/Following';

import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#404E4D' },
        headerTintColor: '#fff',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={DashboardRoutes} />
      {/* <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Search" component={Search} /> */}
    </Stack.Navigator>
  );
}

export default Routes;
