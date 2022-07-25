import {SpeedDial} from '@rneui/base';
import React from 'react';
import {useColorScheme} from 'react-native';
import {useDispatch} from 'react-redux';
import {storeToken} from '../services/accessToken.service';
import {
  setAccessToken,
  setAddItemDialogVisible,
  setCheckinDialogVisible,
} from '../state/appSlice';
import {auth0} from './Authentication';

const ActionFab = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(useColorScheme());
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const onLogout = () => {
    auth0.webAuth
      .clearSession({})
      .then((success: any) => {
        dispatch(setAccessToken(null));
        storeToken(null);
      })
      .catch((error: any) => {
        console.log('Log out cancelled');
      });
  };

  return (
    <SpeedDial
      isOpen={open}
      color={isDarkMode ? 'white' : 'black'}
      icon={{name: 'edit', color: isDarkMode ? 'black' : 'white'}}
      openIcon={{name: 'close', color: isDarkMode ? 'black' : 'white'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}>
      <SpeedDial.Action
        icon={{name: 'add', color: isDarkMode ? 'black' : 'white'}}
        title="Add"
        color={isDarkMode ? 'white' : 'black'}
        onPress={async () => {
          setOpen(false);
          dispatch(setAddItemDialogVisible(true));
        }}
      />
      <SpeedDial.Action
        icon={{name: 'calendar-today', color: isDarkMode ? 'black' : 'white'}}
        title="Check-In"
        color={isDarkMode ? 'white' : 'black'}
        onPress={() => {
          setOpen(false);
          dispatch(setCheckinDialogVisible(true));
        }}
      />
      <SpeedDial.Action
        icon={{name: 'logout', color: isDarkMode ? 'black' : 'white'}}
        title="Logout"
        color={isDarkMode ? 'white' : 'black'}
        onPress={() => {
          setOpen(false);
          onLogout();
        }}
      />
    </SpeedDial>
  );
};

export default ActionFab;
