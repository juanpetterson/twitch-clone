import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

export default function DashboardRoutes() {
  return (
    <Tab.Navigator activeColor="#9147ff" inactiveColor="#282828" barStyle={{ backgroundColor: '#fff' }} labeled={false}>
      <Tab.Screen
        name="Following"
        component={() => <Wildcard title="Home" />}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabBarIconContainer}>
              <Icon name="heart" color={color} size={18} />
              <Text
                style={focused ? [styles.text, styles.textFocused] : styles.text}
              >
                Seguindo
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={() => <Wildcard title="Home" />}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabBarIconContainer}>
              <Icon name={focused ? 'compass' : 'compass-outline'} color={color} size={18} />
              <Text
                style={focused ? [styles.text, styles.textFocused] : styles.text}
              >
                Seguindo
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={() => <Wildcard title="Home" />}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabBarIconContainer}>
              <Icon name={focused ? 'checkbox-multiple-blank' : 'checkbox-multiple-blank-outline'} color={color} size={18} />
              <Text
                style={focused ? [styles.text, styles.textFocused] : styles.text}
              >
                Seguindo
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarIconContainer: {
    flexDirection: 'column',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  text: {
    fontSize: 10,
    color: '#282828',
    fontFamily: 'Montserrat-Medium',
    marginTop: 3,
  },
  textFocused: {
    fontSize: 12,
    color: '#9147ff',
  },
});
