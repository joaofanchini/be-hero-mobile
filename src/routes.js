import React from 'react';

/**
 * É essencial que este cara sempre venha em torno das rotas
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incident from './pages/Incidents';
import Details from './pages/Details';

const AppStack = createStackNavigator();

/**
 * App Screen é o cara que carrega nossas telas
 */
export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Incident' component={Incident} />
        <AppStack.Screen name='Details' component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
