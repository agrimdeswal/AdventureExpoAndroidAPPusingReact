import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import NewDestinationScreen from './NewDestinationScreen';
import ListDestinationsScreen from './ListDestinationsScreen';
import AboutScreen from './AboutScreen';
import NewApp  from './New';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'AdventureExplorer' }} />
        <Stack.Screen name="NewDestination" component={NewDestinationScreen} />
        <Stack.Screen name="ListDestinations" component={ListDestinationsScreen} />
        <Stack.Screen name="Destination" component={NewApp} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
