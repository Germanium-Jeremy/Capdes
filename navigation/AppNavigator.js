import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MechanicsScreen from '../screens/MechanicsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Footer from '../screens/components/Footer';
import Landing from '../screens/Landing';

const Stack = createStackNavigator();

export default function AppNavigator() {
     return (
          <NavigationContainer>
               <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen name='Landing' component={ Landing } />
                    <Stack.Screen name="Login" component={ LoginScreen } />
                    <Stack.Screen name="Mechanics" component={MechanicsScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
               </Stack.Navigator>
               <Footer />
          </NavigationContainer>
     );
}
