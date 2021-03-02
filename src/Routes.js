import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyHeader from '@components/Header';

import Home from '@pages/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <MyHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
