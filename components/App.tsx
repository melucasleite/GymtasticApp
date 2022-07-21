import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import ActionFab from './ActionFAB';
import AddItemDialog from './AddItemDialog';
import AppContainer from './AppContainer';
import CheckinDialog from './CheckinDialog';
import EditItemDialog from './EditItemDialog';
import LoginView from './LoginView';

const App = () => {
  const {accessToken} = useSelector((state: any) => state.app);
  let loggedIn = accessToken !== null;
  return (
    <SafeAreaView>
      {!loggedIn ? (
        <LoginView />
      ) : (
        <>
          <AppContainer />
          <ActionFab />
          <AddItemDialog />
          <CheckinDialog />
          <EditItemDialog />
        </>
      )}
    </SafeAreaView>
  );
};

export default App;
