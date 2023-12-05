import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Main = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
      <Main.Screen name={'Main'} component={MainScreen} />
      <Main.Screen name={'List'} component={ListScreen} />
      <Main.Screen name={'Details'} component={DetailsScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
