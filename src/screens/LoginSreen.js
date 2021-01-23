import React, {useState} from 'react'
import{View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

//@assets
const carBackground = require('../assets/carBackground.jpeg')

const LoginScreen = () =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return(
   
    <ImageBackground source={carBackground} style={styles.container} resizeMode='cover' >
      <View style={styles.overlay}>
      <KeyboardAvoidingView behavior='position'>
        <Text style={styles.title}>ECOCARG</Text>
        <Text style={styles.subtitle}>APP</Text>
        <Text style={styles.titleDescription}>Ingresa tus datos para ingresar a la App </Text>
        <View style={styles.textInputContainer} >
          <TextInput style={styles.textInput} placeholder={'Correo Electronico'} value={email} onChangeText={value => setEmail(value)} />
          <TextInput style={styles.textInput} placeholder={'Contraseña'} value={password} onChangeText={value => setPassword(value)} />
        </View>
        <View style ={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.texButton}>
              INGRESAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.texButton}>
              REGISTRATE
            </Text>

          </TouchableOpacity>
          

        </View>
        </KeyboardAvoidingView>
      </View>
    
    </ImageBackground>
    
     
    
  )
}

const styles = StyleSheet.create({
  container :{
    width:'100%',
    height:'100%',
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex:1,
  },
  title:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
    letterSpacing: 5,
    marginHorizontal:20,
    
  },
  subtitle:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 45,
    fontWeight: 'bold',
    marginHorizontal:20,
    
  },
  titleDescription:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 60,
    marginHorizontal: 25,
  },
  textInput:{
    width:250, 
    height:35, 
    backgroundColor:'white', 
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    fontSize:12
    
  }, 
  textInputContainer:{
    marginHorizontal:10,
    marginTop:25,
    alignContent: 'center',
    alignItems:'center',
  }, 
  buttonContainer:{
    marginHorizontal:10,
    marginTop:15,
    alignContent: 'center',
    alignItems:'center',
  }, 
  button:{
    width:140, 
    height:35, 
    backgroundColor:'#589CB8', 
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  }, 
  texButton:{
    textAlign: 'center',
    color: 'white',
    fontSize:16,
  }
})


export default LoginScreen;