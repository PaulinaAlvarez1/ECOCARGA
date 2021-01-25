import React, { useEffect, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  PRIMARY_FONT_MEDIUM, PRIMARY_FONT_BOLD,
} from '../theme/styles'

// assets
const oops = require('../assets/oops.png');
const removeIcon = require('../assets/remover.png');

const HomeScreen = ({navigation, getVehicle, vehicles, getVehicleState, getTravels, travels, deleteVehicle}) => {
  useEffect(() => {
    getVehicle();
    getTravels();
  }, [])

    const logOut = () => {
      AsyncStorage.removeItem('token');
      navigation.navigate('Login');
      alert('Te esperamos')
    }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={logOut}
        >
          <Text style={{ color: "red", paddingHorizontal: 15, fontWeight: 'bold' }}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const renderVehicle = vehicle => {
    return (
      <View style={styles.row} key={vehicle.id}>
        <View>
          <Text style={styles.mainTitle} >Modelo</Text>
          <Text>{vehicle.model}</Text>
        </View>
        <View>
          <Text style={styles.mainTitle}>Capacidad</Text>
          <Text>{vehicle.capacity}</Text>
        </View>
        <View>
          <Text style={styles.mainTitle}>Licencia</Text>
          <Text>{vehicle.licensePlate}</Text>
        </View>
        <View>
          <Text style={styles.mainTitle}>Soat</Text>
          <Text>{vehicle.soat}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteVehicle(vehicle.id)}>
          <Image source={removeIcon} style={styles.iconRemove} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderList = () => {
    const list = vehicles.length ? vehicles : [{...vehicles}]
    return (
      <FlatList
        data={list}
        renderItem={({item}) => renderVehicle(item)}
        keyExtractor={(item, index) => item.index}
      />
    )
  }

  const renderNoVehicles = () => {
    return(
      <View style={styles.noVehicles}>
        <Image source={oops} style={styles.emptyStateImage}/>
        <Text style={styles.noVehiclesText}>Lo sentimos aún no tienes vehiculos registrados</Text>
      </View>
    )
  }

  const renderTravels = () => (
    <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.travelContainer}>
      <Text style={styles.text}>¡Hey! Quizas estes cerca de estos viajes que tenemos disponibles para ti</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.main}>
    <View style={styles.container}>
      {console.log(vehicles, 'vehiculos')}
      {travels && renderTravels()}
      {(!vehicles || vehicles.statusCode) || getVehicleState.error ? renderNoVehicles() : renderList()}
    </View>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Vehicle')}>
        <Text style={styles.buttonText}>CREAR VEHICULO</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  button:{
    width: '100%', 
    height:40, 
    borderRadius: 30,
    backgroundColor:'#589CB8', 
    justifyContent: 'center',
  }, 
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontSize:16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainTitle: {
    fontFamily: PRIMARY_FONT_BOLD
  },
  iconRemove: {
    width: 20,
    height: 20,
  },
  soatImage: {
    width: 20,
    height: 20,
  },
  noVehicles: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  noVehiclesText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  emptyStateImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center'
  },
  travelContainer: {
    backgroundColor: '#fada5e',
    padding: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    fontFamily: PRIMARY_FONT_MEDIUM,
    textAlign:'center'
  }
})

export default HomeScreen;
