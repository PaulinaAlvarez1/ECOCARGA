import React from 'react'
import{View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native'

//@assets
const carBackground = require('../assets/carBackground.jpeg')

const RegisterScreen = () => {
  const[name, setname] = ('')
  const{email, setemail} = ('')
  const[password,setPassword] = ('')
  const[confimrPassword, setConfimrPassword] = ('')
  return(
    <ImageBackground source={carBackground} style={styles.container} resizeMode='cover'>
      <View style={styles.overlay}>
      <KeyboardAvoidingView behavior='position'>
      <Text style={styles.title}>Ingresa Tus </Text>
      <Text style={styles.subtitle}>Datos</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder={'Ingresa tu nombre de usuario'} value={name} onChangeText={value =>setname(value)}/>
        <TextInput style={styles.textInput} placeholder={'Ingresa tu correo electronico'}value={email} onChangeText={value =>setemail(value)}/>
        <TextInput style={styles.textInput} placeholder={'Ingresa tu contraseña'}value={password} onChangeText={value =>setPassword(value)}/>
        <TextInput style={styles.textInput} placeholder={'Confirma tu contraseña'} value={confimrPassword} onChangeText={value => setConfimrPassword(value)}/>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.texButton}>
            REGISTRATE
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      </KeyboardAvoidingView>
      </View>
    </ImageBackground>

  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
  },
  title:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop:10,
    letterSpacing:5,
    marginHorizontal:10,
  },
  subtitle:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop:1,
    letterSpacing:5,
    marginHorizontal:10,
  },
  textInputContainer:{
    marginHorizontal:10,
    marginTop:25,
    alignContent: 'center',

  },
  textInput:{
    width:300,
    height:50,
    backgroundColor:'white',
    justifyContent:'center',
    marginVertical: 10,
    borderRadius: 10, 
    fontSize: 12,
    marginHorizontal:15,
    
  },
  buttonContainer:{
    marginHorizontal:15,
    marginTop:15,
    alignContent:"center",
    alignItems:'center',
  },
  button:{
    width:300,
    height:50,
    backgroundColor:'#589CB8',
    justifyContent:'center',
    marginVertical:10,
    borderRadius:10,
  },
  texButton:{
    textAlign:'center',
    color:'white',
    fontSize:16,
  },
})