
import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'

//@components
import AlertMessage from '../components/alertMessage'

//@theme
import {
  PRIMARY_FONT_MEDIUM, PRIMARY_FONT, PRIMARY_FONT_LIGHT,
} from '../theme/styles'

const DriverScreen = ({ navigation, getVehicleTypes, types, driverId, createVehicle }) => {
  const[model,setModel] = useState('');
  const[capacity,setCapacity] = useState('');
  const[typeLoad, setTypeLoad] = useState('');
  const[license,setLicense] = useState('');
  const[soat, setSoat] = useState('');
  const[enrollment, setEnrollment] = useState('');
  const[formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (model && capacity && typeLoad && license && soat && enrollment) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  })

  useEffect(() => {
    getVehicleTypes()
  }, [])

  const onCreateVehicle = () => {
    const data = {
      driverId,
      model,
      capacity,
      typeId: typeLoad,
      soat,
      enrollment,
      licensePlate: license
    }

    createVehicle(data, navigation);
  }
 
  return(
    <ScrollView style={styles.container}>
        <Text style={styles.title}>¡REGISTRA TU VEHICULO!</Text>
      <View style={{marginVertical: 25, marginHorizontal:30 }}>
        <TextInput
          style={styles.TextInput}
          placeholder={'Modelo del Vehiculo'}
          placeholderTextColor='white'
          value={model}
          keyboardType="numeric"
          onChangeText={value => setModel(value)}
        />
        <TextInput
          keyboardType='numeric'
          style={styles.TextInput}
          placeholder={'Capacidad del vehiculo'}
          placeholderTextColor='white'
          value={capacity}
          onChangeText={value => setCapacity(value)}
        />
         <Text style={styles.textInfo}>*El valor debe ser en Kg</Text>
        {!!types && <View>
          <Text style={styles.selectType}>Seleccione el tipo de carga</Text>
          <View style={styles.containerTypes}>
            {types.map(type =>  
              <TouchableOpacity 
                key={type.id}
                style={[styles.type, typeLoad === type.id && styles.typeSelected]}
                onPress={() => setTypeLoad(type.id)}
              >
                <Text style={typeLoad === type.id ? styles.typeTextSelected : styles.typeText}>{type.name}</Text>
              </TouchableOpacity>)
            }
          </View>
        </View>}
        <TextInput
          keyboardType='numeric'
          style={styles.TextInput}
          placeholder={'Número de la licencia'}
          placeholderTextColor='white'
          value={license}
          onChangeText={value => setLicense(value)}
        />
        <TextInput
          keyboardType='numeric'
          style={styles.TextInput}
          placeholder={'Número del soat'}
          placeholderTextColor='white'
          value={soat}
          onChangeText={value => setSoat(value)}
        />
        <TextInput
          keyboardType='numeric'
          style={styles.TextInput}
          placeholder={'Número de matricula'}
          placeholderTextColor='white'
          value={enrollment}
          onChangeText={value => setEnrollment(value)}
        />
      </View>
      <AlertMessage show={!formValid} type="error" message="Todos los campos son obligatorios"/>
      <TouchableOpacity style={[styles.button, !formValid && styles.disabled] } onPress={onCreateVehicle} disabled={!formValid}>
          <Text style={styles.buttonText}>
            REGISTRAR VEHICULO
          </Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title:{
  textAlign:'center',
  color: '#589CB8',
  fontSize:20,
  fontFamily: PRIMARY_FONT_MEDIUM,
  marginVertical: 25,
  marginHorizontal:10,
   },
   textInfo: {
     fontSize: 12,
     fontFamily: PRIMARY_FONT_LIGHT,
     marginBottom: 10,
   },
  TextInput:{
    height:40,
    backgroundColor: '#589CB8',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 8,
    color: 'white',
    fontFamily: PRIMARY_FONT_LIGHT
  },
  button:{
    width: '100%', 
    height:40, 
    bottom:0,
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
  buttonContainer:{
    alignContent:"center",
    alignItems:'center',
    color: 'white',
  },
  type: {
    borderRadius: 15,
    backgroundColor: '#F5F5F5',
    margin: 4,
    padding: 6,
    borderWidth: 1,
    borderColor: 'gray'
  },
  selectType: {
    fontFamily: PRIMARY_FONT_MEDIUM
  },
  containerTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeSelected: {
    backgroundColor: '#589CB8',
  },
  typeTextSelected: {
    color: 'white',
  },
  typeText: {
    color: 'black'
  },
  disabled: {
    backgroundColor: 'lightgray'
  }
})


export default DriverScreen;