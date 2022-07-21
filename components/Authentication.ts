import Auth0 from 'react-native-auth0';
import credentials from '.././auth0-configuration';
const auth0 = new Auth0(credentials);

export {auth0};
