import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAccessToken} from '../state/appSlice';
import {auth0} from './Authentication';
import {audience} from '.././auth0-configuration';

const LoginView = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
        audience,
      })
      .then((credentials: any) => {
        dispatch(setAccessToken(credentials.accessToken));
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    elevation: 2,
    height: 90,
    width: 200,
    backgroundColor: '#2196F3',
  },
  buttonText: {color: 'white', fontSize: 25},
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});
export default LoginView;
