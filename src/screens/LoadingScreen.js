import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import  { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

// assets
const truckAnimation = require('../assets/animations/truck.json')

const LoadingScreen = ({ navigation, setToken }) => {
  const getSession = async () => {
    const token = await AsyncStorage.getItem('token');
    const driverId = await AsyncStorage.getItem('driverId');
  
    if (token) {
      setToken({ token, driverId });
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }
  
  useEffect(() => {
    setTimeout(getSession, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <LottieView source={truckAnimation} autoPlay loop />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#589CB8',
  }
})

export default LoadingScreen;
