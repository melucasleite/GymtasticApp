import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state/reducer';
import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';

import ActionFab from './components/ActionFAB';
import StreakHeader from './components/StreakHeader';
import ItemList from './components/ItemList';
import AddItemDialog from './components/AddItemDialog';
import CheckinDialog from './components/CheckinDialog';
import EditItemDialog from './components/EditItemDialog';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '90%'}}>
          <View>
            <StreakHeader />
            <ItemList />
          </View>
        </ScrollView>
        <ActionFab />
        <AddItemDialog />
        <CheckinDialog />
        <EditItemDialog />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
