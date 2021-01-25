import React from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

//@theme
import {
  PRIMARY_FONT,
  PRIMARY_COLOR
} from './src/theme/styles'

// screens
import LoginScreen from './src/containers/Login';
import LoadingScreen from './src/containers/Loading';
import HomeSreen from './src/containers/Home';
import RegisterScreen from './src/containers/Register';
import VehicleScreen from './src/containers/Vehicle';
import MapScreen from './src/containers/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';
const Stack = createStackNavigator()
const App = () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="loading"
        >
          <Stack.Screen
            options={{headerShown: false}}
            name="Loading"
            component={LoadingScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ title: 'Registro',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: PRIMARY_FONT,
            }, }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{title: 'Mis Vehiculos', headerLeft: null, headerTitleStyle: {
              fontFamily: PRIMARY_FONT,
            }}}
            name="Home"
            component={HomeSreen}
          />
          <Stack.Screen
            options={{title: 'Viajes disponibles', headerTitleStyle: {
              fontFamily: PRIMARY_FONT,
            }}}
            name="Map"
            component={MapScreen}
          />
          <Stack.Screen
            options={{title: 'Crear Vehiculo'}}
            name="Vehicle"
            component={VehicleScreen}
          />
        </Stack.Navigator>
        <StatusBar
          barStyle="dark-content"
          backgroundColor= {PRIMARY_COLOR}
        />
      </NavigationContainer> 
    </Provider>
  )
}

export default App;
