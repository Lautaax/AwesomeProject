import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationForm from './src/components/RegistrationForm';
import LoginForm from './src/components/LoginForm';
import MapScreen from './src/components/MapScreen';
import AuthService from './src/services/AuthService';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [user, setUser] = useState(AuthService.getCurrentUser());

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? 'MapScreen' : 'LoginForm'}>
          {user ? (
            <Stack.Screen name="MapScreen" component={MapScreen} />
          ) : (
            <>
              <Stack.Screen name="LoginForm" component={LoginForm} />
              <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;