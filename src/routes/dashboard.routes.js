import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function Wildcard({ title }) {
  return (
    <Text>
      Wildcard
      {' '}
      {title}
    </Text>
  );
}

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <Wildcard title="Home" />} />
      <Tab.Screen name="Settings" component={() => <Wildcard title="Settings" />} />
    </Tab.Navigator>
  );
}
