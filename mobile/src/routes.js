import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Incidents from './components/Incidents';
import Detail from './components/Detail';

const AppStack = createStackNavigator();

export default function src() {
  return (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="Incidents" component={Incidents} />
            <AppStack.Screen name="Detail" component={Detail}/>
        </AppStack.Navigator>
    </NavigationContainer>
  );
}
