import React from 'react';
import {ScrollView, RefreshControl, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AnyAction} from 'redux';
import {fetchCheckins} from '../state/actions/fetchCheckins';
import {fetchExercises} from '../state/actions/fetchExercises';
import ItemList from './ItemList';
import StreakHeader from './StreakHeader';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const AppContainer = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchExercises() as unknown as AnyAction);
    dispatch(fetchCheckins() as unknown as AnyAction);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{height: '90%'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        <StreakHeader />
        <ItemList />
      </View>
    </ScrollView>
  );
};

export default AppContainer;
