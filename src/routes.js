import React from 'react';
import {
  TouchableOpacity, Text, View, StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

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
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        backBehavior="none"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignIn" headerShown component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen
        name="Dashboard"
        component={DashboardRoutes}
        options={{
          headerTitle: '',
          headerShown: true,
          // headerTransparent: true,
          headerRightContainerStyle: { marginHorizontal: 10 },
          headerLeft: () => (
            <TouchableOpacity style={styles.header}><Text>Header massa</Text></TouchableOpacity>
          ),
          headerRight: () => (
            // <TouchableOpacity style={styles.header}><Text>Header massa</Text></TouchableOpacity>
            <View style={styles.headerRightContainer}>
              <IconFeather name="bell" size={18} onPress={() => { }} />
              <Icon name="message-outline" size={18} onPress={() => { }} />
              <IconFeather name="search" size={18} onPress={() => { }} />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: '#f00',
    flex: 1,
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
  },
});
