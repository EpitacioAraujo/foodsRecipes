import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import MyHeader from '@components/Header';
import MyTabBar from '@components/TabBar';

import Search from '@pages/Search';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: () => <MyHeader />,
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={StackNavigator}
          options={{iconName: 'home'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
