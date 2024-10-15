// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import QuizScreen from '../screens/quiz-page';
import SplashScreen from '../screens/splash-screen';
import LoginScreen from '../screens/login-screen';
import LoadingScreen from '../screens/loading-screen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the color of the header text and icons
          headerTitleStyle: {
            fontWeight: 'bold', // Set the font weight of the header title
          },
        }}
      >
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hide header for Splash screen
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} // Customize header title for Login screen
        />
        <Stack.Screen 
          name="Loading" 
          component={LoadingScreen} 
          options={{ headerShown: false }} // Hide header for Loading screen
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} // Customize header title for Home screen
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Details' }} // Customize header title for Details screen
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen} 
          options={{ 
            title: 'Quiz', 
            // headerLeft: null 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;