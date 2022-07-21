import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state/reducer';
import {SafeAreaView} from 'react-native';
import ActionFab from './components/ActionFAB';
import AddItemDialog from './components/AddItemDialog';
import CheckinDialog from './components/CheckinDialog';
import EditItemDialog from './components/EditItemDialog';
import AppContainer from './components/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <AppContainer />
        <ActionFab />
        <AddItemDialog />
        <CheckinDialog />
        <EditItemDialog />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
