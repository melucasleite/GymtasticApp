import AsyncStorage from '@react-native-async-storage/async-storage';
import {audience} from '../auth0-configuration';
import {auth0} from '../components/Authentication';
import {setAccessToken} from '../state/appSlice';

export const storeToken = async (value: any) => {
  console.log('fired', value);
  if (value === null) await AsyncStorage.removeItem('@accessToken');
  else await AsyncStorage.setItem('@accessToken', value);
};

export const getToken = async () => {
  const value = await AsyncStorage.getItem('@accessToken');
  return value;
};

export const useOnLogin = dispatch => () => {
  auth0.webAuth
    .authorize({
      scope: 'openid profile email',
      audience,
    })
    .then((credentials: any) => {
      dispatch(setAccessToken(credentials.accessToken));
      storeToken(credentials.accessToken);
    })
    .catch((error: any) => console.log(error));
};
