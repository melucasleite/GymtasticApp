import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setAccessToken} from '../state/appSlice';
import {getToken, useOnLogin} from '../services/accessToken.service';

const LoginView = () => {
  const dispatch = useDispatch();
  const {accessToken} = useSelector((state: any) => state.app);
  const [loaded, setLoaded] = useState(false);
  const onLogin = useOnLogin(dispatch);
  const retrieveAccessTokenFromStorage = () => {
    getToken().then(value => {
      dispatch(setAccessToken(value));
      setLoaded(true);
    });
  };
  useEffect(retrieveAccessTokenFromStorage, []);

  return (
    <>
      {loaded && !accessToken ? (
        <View style={styles.container}>
          <Pressable style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </>
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
