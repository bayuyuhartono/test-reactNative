import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'
import Moment from 'moment';

function RegisterScreen() {
  const navigation = useNavigation();
  const [validation, setValidation] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [greyedSignUp, setGreyedSignUp] = useState(false);
  const [open, setOpen] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true);

  const changeUsername = (enter) => {
    setUsername(enter)
    changeValid()
  }

  const changePassword = (enter) => {
    setPassword(enter)
    changeValid()
  }

  const changeFirstName = (enter) => {
    setFirstName(enter)
    changeValid()
  }

  const changeLastName = (enter) => {
    setLastName(enter)
    changeValid()
  }

  const changePhone = (enter) => {
    setPhone(enter)
    changeValid()
  }

  const changeEmail = (enter) => {
    setEmail(enter)
    changeValid()
  }

  const changeBirthday = (enter) => {
    setBirthday(enter)
    changeValid()
  }

  const pressBirthday = () => {
    setOpen(true)
  }

  const changeValid = (enter) => {
    if (username === '' || password === '' || firstName === '' || lastName === '' || phone === '' || email === '' || birthday === '') {
      setGreyedSignUp(false)
    } else {
      setGreyedSignUp(true)
    }
  }

  const registerAct = (enter) => {
    alert(username + ' register success')
  }

  return (
      <ScrollView>
        <View style={styles.container}>
        <Image source={require('../../src/images/bg_pvg.png')} style={styles.nav}/>
          <View style={styles.head}>
            <Text style={styles.welcome}>Welcome to ui</Text>
            <Text style={styles.title}>Register to get the benefits</Text>
          </View>
            <TextInput 
              style={styles.form} 
              placeholder="Username" 
              label="Username *" 
              mode='outlined'
              onChangeText = {changeUsername}
            />
            <TextInput 
              style={styles.form} 
              placeholder="Password" 
              label="Password *" 
              mode='outlined'
              secureTextEntry={passwordVisible}
              right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
              onChangeText = {changePassword}
            />
            <TextInput 
              style={styles.form} 
              placeholder="First name" 
              label="First name *" 
              mode='outlined'
              onChangeText = {changeFirstName}
            />
            <TextInput 
              style={styles.form} 
              placeholder="Last name" 
              label="Last name *" 
              mode='outlined'
              onChangeText = {changeLastName}
            />
            <TextInput 
              style={styles.form} 
              placeholder="Phone number" 
              keyboardType = 'numeric'
              label="Phone number *" 
              mode='outlined'
              onChangeText = {changePhone}
            />
            <TextInput 
              style={styles.form} 
              placeholder="Email" 
              label="Email *" 
              mode='outlined'
              onChangeText = {changeEmail}
            />
            <TextInput 
              style={styles.form} 
              placeholder="Birthday" 
              label="Birthday *" 
              mode='outlined'
              onFocus= {pressBirthday}
              value= {Moment(date).format('MMMM / D / YYYY')}
            />
            {greyedSignUp ? 
            <Button style={styles.button}  mode="contained" onPress={registerAct}>
              Sign up
            </Button> : <Button style={styles.buttonGrey}  mode="contained">
              Sign up
            </Button>
            }

            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
            
            <View style={styles.foot}>
              <Text style={{color: '#287CFA'}} onPress={() => navigation.navigate('Login')}>
                Login here if you have an account
              </Text>
            </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  nav: {
    marginTop: -5,
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
  },
  head: {
    alignItems: 'center',
    marginTop: -50,
  },
  foot: {
    alignItems: 'center',
    marginBottom: 40,
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
  buttonGrey: {
    margin: 12,
    height: 45,
    backgroundColor: '#BDBDBD',
    justifyContent: 'center',
  },
})

export default RegisterScreen;