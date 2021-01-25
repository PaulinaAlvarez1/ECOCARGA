import React, {useState, useEffect} from 'react'
import{
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native'

// @constants
import {
  PRIMARY_COLOR,
  PRIMARY_FONT,
  PRIMARY_FONT_BOLD,
  PRIMARY_FONT_MEDIUM,
  PRIMARY_FONT_LIGHT,
} from '../theme/styles';

//@components
import AlertMessage from '../components/alertMessage';

//@assets
const carBackground = require('../assets/carBackground.jpeg')
const eyeUp = require('../assets/eye.png');
const eyeClose = require('../assets/eyeClose.png');

const LoginScreen = ({navigation, authdDrive, auth}) =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [maskPassword, setMaskPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true)

  useEffect(() => {
    if (email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  })
  
  const onLogin = () => {

    const initianData ={
      email, 
      password,
    }

    authdDrive(initianData, navigation);
  }

  return(
     <ImageBackground source={carBackground} style={styles.container} resizeMode='cover' >
       <ScrollView contentContainerStyle={styles.overlay} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>ECOCARGA</Text>
          <View style={styles.textInputContainer} >
            <TextInput
              style={styles.textInput}
              placeholder={'Correo Electronico'}
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={!maskPassword}
                style={styles.textInput}
                placeholder={'Contraseña'}
                value={password}
                onChangeText={value => setPassword(value)} 
              />
              <TouchableOpacity onPress={() => setMaskPassword(!maskPassword)} style={styles.absolute}>
                <Image source={maskPassword ? eyeClose : eyeUp} style={styles.iconMask}/>
              </TouchableOpacity>
            </View>
          </View>
           <AlertMessage show={auth.error} type="error" message="Hubo un problema al intentar iniciar sesión" />
          </ScrollView> 
        <View style ={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, !isFormValid && styles.disabled]}
              onPress={onLogin}
              disabled={!isFormValid}
            >
              <Text style={styles.texButton}>
                INGRESAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Register')}
              >
              <Text style={styles.texButton}
            >
                REGISTRATE
              </Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 35,
    letterSpacing: 5,
    marginHorizontal:20,
    fontFamily: PRIMARY_FONT_MEDIUM
    
  },
  titleDescription:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 60,
    marginHorizontal: 25,
  },
  textInput:{
    height: 40,
    backgroundColor:'white',
    justifyContent:'center',
    marginVertical: 10,
    borderRadius: 8, 
    fontSize: 14,
    fontFamily: PRIMARY_FONT,
    paddingHorizontal: 20,
    width: '100%'
  }, 
  textInputContainer:{
    alignContent: 'center',
    alignItems:'center',
  }, 
  buttonContainer:{
    alignContent: 'center',
    alignItems:'center',
    bottom: 0
  }, 
  button:{
    width: '100%', 
    height:40, 
    borderRadius: 30,
    backgroundColor:'#589CB8', 
    justifyContent: 'center',
  }, 
  texButton:{
    textAlign: 'center',
    color: 'white',
    fontFamily: PRIMARY_FONT_MEDIUM,
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
  },
  passwordContainer: {
    width: '100%'
  }
})


export default LoginScreen;