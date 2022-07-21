import {SpeedDial} from '@rneui/base';
import React from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  setAccessToken,
  setAddItemDialogVisible,
  setCheckinDialogVisible,
} from '../state/appSlice';
import {auth0} from './Authentication';

const ActionFab = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const onLogout = () => {
    auth0.webAuth
      .clearSession({})
      .then((success: any) => {
        Alert.alert('Logged out!');
        dispatch(setAccessToken(null));
      })
      .catch((error: any) => {
        console.log('Log out cancelled');
      });
  };

  return (
    <SpeedDial
      isOpen={open}
      icon={{name: 'edit', color: '#fff'}}
      openIcon={{name: 'close', color: '#fff'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}>
      <SpeedDial.Action
        icon={{name: 'add', color: '#fff'}}
        title="Add"
        onPress={async () => {
          setOpen(false);
          dispatch(setAddItemDialogVisible(true));
        }}
      />
      <SpeedDial.Action
        icon={{name: 'calendar-today', color: '#fff'}}
        title="Check-In"
        onPress={() => {
          setOpen(false);
          dispatch(setCheckinDialogVisible(true));
        }}
      />
      <SpeedDial.Action
        icon={{name: 'calendar-today', color: '#fff'}}
        title="Logout"
        onPress={() => {
          setOpen(false);
          onLogout();
        }}
      />
    </SpeedDial>
  );
};

export default ActionFab;
