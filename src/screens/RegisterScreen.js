import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native'

//@components
import AlertMessage from '../components/alertMessage'

// @constants
import {
  PRIMARY_COLOR,
  PRIMARY_FONT,
  PRIMARY_FONT_BOLD,
  PRIMARY_FONT_MEDIUM,
  PRIMARY_FONT_LIGHT,
} from '../theme/styles';

//@assets
const carBackground = require('../assets/carBackground.jpeg');
const eyeUp = require('../assets/eye.png');
const eyeClose = require('../assets/eyeClose.png');

//TODO add email and password error, check overlay

const RegisterScreen = ({navigation, registerDriver, documentTypes, getDocumentTypes}) => {
  const[name, setName] =  useState('');
  const[lastname, setLastname] =  useState('');
  const[phone, setPhone] =  useState('');
  const[email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [maskPassword, setMaskPassword] = useState(false);
  const[confimrPassword, setConfimrPassword] = useState('');
  const [maskConfirmPassword, setMaskConfirmPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   getDocumentTypes()
  // }, [])

  useEffect(() => {
    if (name && lastname && phone && email && password && confimrPassword && password === confimrPassword) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  })
  
  const onRegister = () => {

   const initialData={
    firstName: name,
    lastName: lastname,
    email,
    password,
    confimrPassword,
    phone,
     
   }

   registerDriver(initialData)
  }

  const onValidateEmail= (email) => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  }

  return(
      <ImageBackground source={carBackground} style={styles.container} resizeMode='cover'>
        <ScrollView style={styles.overlay} keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <Text style={styles.title}>Ingresa tus datos para registarte en ECOCARGA</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={'Nombres'}
                value={name}
                onChangeText={value =>setName(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder={'Apellidos'}
                value={lastname}
                onChangeText={value =>setLastname(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder={'Ingresa tu correo electronico'}
                value={email}
                onChangeText={value => setEmail(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder={'Ingresa tu numero de celular'}
                value={phone}
                maxLength={10}
                keyboardType="numeric"
                onChangeText={value =>setPhone(value)}
              />
              <View style={styles.passwordContainer}>
                <TextInput 
                  secureTextEntry={!maskPassword}
                  style={styles.textInput}
                  placeholder={'Ingresa tu contraseña'}
                  value={password}
                  onChangeText={value =>setPassword(value)}
                />
                <TouchableOpacity onPress={() => setMaskPassword(!maskPassword)} style={styles.absolute}>
                  <Image source={maskPassword ? eyeClose : eyeUp} style={styles.iconMask}/>
                </TouchableOpacity>
              </View>
              <View style={styles.passwordContainer}>
                <TextInput
                  secureTextEntry={!maskConfirmPassword}
                  style={styles.textInput}
                  placeholder={'Confirma tu contraseña'}
                  value={confimrPassword}
                  onChangeText={value => setConfimrPassword(value)}
                />
                <TouchableOpacity onPress={() => setMaskConfirmPassword(!maskConfirmPassword)} style={styles.absolute}>
                  <Image source={maskConfirmPassword ? eyeClose : eyeUp} style={styles.iconMask}/>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.nowText}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text style={styles.loginText}>Incia sesión</Text></TouchableOpacity>
            <AlertMessage show={!isFormValid} type="error" message={"Todos los datos son obligatorios"}/>
          <AlertMessage show={email.length > 0 && !onValidateEmail(email)} type="error" message={"Ingresa un email valido"}/>
          <AlertMessage show={!password.length[0] && !confimrPassword.length[0] && password !== confimrPassword} type="error" message={"Tus contraseñas no coinciden"}/>
        </View>
        <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, !isFormValid && styles.disabled]}
                onPress={() => navigation.navigate('Home')}
                disabled={!isFormValid}
              >
                <Text style={styles.texButton} onPress={onRegister}>
                  REGISTRATE
                </Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </ImageBackground>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
  },
  content: {
    paddingHorizontal: 20,
  },
  title:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: PRIMARY_FONT,
    paddingTop:30,
    marginTop:10,
    marginBottom: 30,
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
    paddingBottom:20,
    marginTop:25,
    alignContent: 'center',
  },
  nowText:{
    fontFamily: PRIMARY_FONT_LIGHT,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
    color: '#FFFFFF'
  },
  loginText:{
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontSize: 17,
    textAlign: 'center',
    color: PRIMARY_COLOR
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex:1,
  },
  textInput:{
    height: 40,
    backgroundColor:'white',
    justifyContent:'center',
    marginVertical: 10,
    borderRadius: 8, 
    fontSize: 14,
    fontFamily: PRIMARY_FONT_LIGHT,
    paddingHorizontal: 20,
  },
  buttonContainer:{
    bottom: 0,
    marginTop: 40,
    alignContent:"center",
    alignItems:'center',
  },
  button:{
    width: '100%',
    height: 40,
    borderRadius: 20,
    backgroundColor:'#589CB8',
    justifyContent:'center',
  },
  texButton:{
    textAlign:'center',
    color:'white',
    fontSize:16,
  },
  iconMask: {
    width: 15,
    height: 15,
  },
  absolute: {
    position: 'absolute',
    right: 20,
    top: 22,
  },
  disabled: {
    backgroundColor: 'lightgray'
  }
})