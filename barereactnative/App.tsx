import React from 'react';
import Home from './Home';
import {SafeAreaView} from 'react-native';
import SubHome from './SubHome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SubHome" component={SubHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
