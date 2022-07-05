import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showSecond, setShowSecond] = useState(false);
  const [greyedCon, setGreyedCon] = useState(false);
  const [greyedLogin, setGreyedLogin] = useState(false);
  const [loginBut, setLoginBut] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const phoneChange = (enterPhone) => {
    setPhone(enterPhone)
    if (phone.length > 9) {
      setGreyedCon(true)
    } else {
      setGreyedCon(false)
    }
  }

  const passChange = (enterPass) => {
    setPassword(enterPass)
    if (password.length > 9) {
      setGreyedLogin(true)
    } else {
      setGreyedLogin(false)
    }
  }

  const continueAct = () => {
    if (phone.length > 9) {
      setShowSecond(true)
      setLoginBut(true)
    } else {
      setShowSecond(false)
      setLoginBut(false)
    }
  }

  const loginAct = () => {
    alert(username + ' login success')
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../src/images/bg_pvg.png')} style={styles.nav}/>
      <View style={styles.head}>
        <Text style={styles.welcome}>Welcome back!</Text>
        <Text style={styles.title}>Login to continue</Text>
      </View>
        <TextInput 
          style={styles.form} 
          placeholder="Phone number" 
          keyboardType = 'numeric'
          label="Phone number" 
          mode='outlined'
          onChangeText = {phoneChange}
        />
        {showSecond ? 
          <TextInput 
            style={styles.form} 
            placeholder="Password" 
            label="Password" 
            mode='outlined'
            secureTextEntry={passwordVisible}
            right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
            onChangeText = {passChange}
          /> : null
        }
        
        {loginBut  ? null : greyedCon ? 
          <Button style={styles.button}  mode="contained" onPress={continueAct}>
            Continue
          </Button> : <Button style={styles.buttonGreyedCon}  mode="contained">
            Continue
          </Button>
        }

        {loginBut === false ? null : greyedLogin ? 
          <Button style={styles.button}  mode="contained" onPress={loginAct}>
            Login
          </Button> : <Button style={styles.buttonGreyedCon}  mode="contained">
            Login
          </Button>
        }
        
        <View style={styles.head}>
          <Text style={{color: '#287CFA'}} onPress={() => navigation.navigate('Register')}>
            Create new acount
          </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    marginTop: -250,
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
  },
  head: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 32,
    fontWeight: '600',
  },
  title: {
    marginTop: 30,
  },
  form: {
    margin: 12,
    backgroundColor: '#FFFFFF',
  },
  button: {
    margin: 12,
    height: 45,
    backgroundColor: '#F9AA33',
    justifyContent: 'center',
  },
  buttonGreyedCon: {
    margin: 12,
    height: 45,
    backgroundColor: '#BDBDBD',
    justifyContent: 'center',
  },
})

export default LoginScreen;