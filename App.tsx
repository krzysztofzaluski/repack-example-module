import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import ListScreen from './src/screens/ListScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={'Main'} component={MainScreen} />
                <Stack.Screen name={'List'} component={ListScreen} />
                <Stack.Screen name={'Details'} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
