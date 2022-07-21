import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAccessToken} from '../state/appSlice';
import {auth0} from './Authentication';

const LoginView = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
      })
      .then((credentials: any) => {
        Alert.alert('AccessToken: ' + credentials.accessToken);
        dispatch(setAccessToken(credentials.accessToken));
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      <Button onPress={onLogin} title={'Log In'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
