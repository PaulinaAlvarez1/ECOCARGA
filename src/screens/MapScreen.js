import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RNLocation from 'react-native-location';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

//@assets
const boxIcon = require('../assets/box.png')
const locationIcon = require('../assets/locationCar.png')

//@theme
import {
  PRIMARY_FONT,
  PRIMARY_COLOR
} from '../theme/styles'

import { API_KEY } from '../constants/constants';
import { from } from 'rxjs/observable/from';

const MapScreen = ({getTravels, travels}) => {
  const [gpsEnabled, setGpsEnabled] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 6.162162162162162,
    longitude: -75.60802911617374,
  });
  const GOOGLE_PROVIDER = 'AIzaSyC3_qDPA-PJ8uI9WVk_YGGSJ17fH5pVraw';

  useEffect(() => {
    Geocoder.init(GOOGLE_PROVIDER);
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'Necesitamos tu ubicación',
          message:
            '¡Tranquilo!, es solo para revisar los viajes disponibles cerca de ti',
          buttonPositive: 'Aceptar',
          buttonNegative: 'Cancelar',
        },
      },
    }).then(granted => {
      setLocationPermission(granted);
    });
  }, []);

  useEffect(() => {
    if (locationPermission) {
      if (Platform.OS !== 'ios') {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        })
          .then(data => {
            setGpsEnabled(true);
          })
          .catch(() => {
            setGpsEnabled(false);
          });
      } else {
        Geolocation.getCurrentPosition(
          info => {
            Geocoder.from({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            })
              // .then(json => {
              //   placeRef.current.setAddressText(
              //     json.results[0].formatted_address
              //   );
              //   setNewAdress(json.results[0].formatted_address);
              // })
              // .catch(error => console.warn(error));

            setMarkerPosition({
              longitude: info.coords.longitude,
              latitude: info.coords.latitude,
            });
          },
          err => console.warn(err)
        );
      }
    }
  }, [locationPermission]);

  useEffect(() => {
    if (gpsEnabled) {
      RNLocation.subscribeToLocationUpdates(locations => {
        Geocoder.from({
          latitude: locations[0].latitude,
          longitude: locations[0].longitude,
        })
          // .then(json => {
          //   placeRef.current.setAddressText(json.results[0].formatted_address);
          //   setNewAdress(json.results[0].formatted_address);
          // })
          // .catch(error => console.warn(error));

        setMarkerPosition({
          longitude: locations[0].longitude,
          latitude: locations[0].latitude,
        });
      });
    }
  }, [gpsEnabled]);
  return (
    <View style={styles.mapView}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        camera={{
          center: {
            latitude: 6.162162,
            longitude: -75.6080
          },
          pitch: 1,
          heading: 1,
          altitude: 1,
          zoom: 8,
          
        }}
        onRegionChangeComplete={() => {
          console.log('onRegionChange');
        }}
        loadingEnabled>
        {travels.slice(0, 7).map((item, i) => (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(item.latitudeStart),
                  longitude: parseFloat(item.longitudeStart),
                }}
                onPress={e => {
                  e.stopPropagation();
                  onMarkerPress(item);
                }}>
                <View style={styles.boxView}>
                    <Text style={styles.boxText}>Viaje disponible</Text>
                    <Image source={boxIcon} style={styles.imageStyle}/>
                </View>
              </Marker>
            ))}
        {markerPosition.latitude && markerPosition.longitude && (
          <Marker
            draggable
            coordinate={{
              latitude: markerPosition.latitude,
              longitude: markerPosition.longitude,
            }}>
             <View style={styles.boxView}>
                    <Text style={styles.boxText}>Tu ubicación</Text>
                    <Image source={locationIcon} style={styles.imageLocation}/>
                </View>
          </Marker>
        )}
      </MapView>
      {console.log(markerPosition, 'ETAMOS ACA')}
    </View>
  )
}

const styles = StyleSheet.create({
  mapView:{
    flex: 1
  },
  boxView: {
    alignSelf:'center',
    alignItems:'center'
  },
  imageStyle: {
    height:30,
    width:30
  },
  imageLocation: {
    height:40,
    width:40,
  },
  boxText: {
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    textAlign:'center',
  },

})

export default MapScreen;
