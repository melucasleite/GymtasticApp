import React from 'react';
import {ScrollView, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AnyAction} from 'redux';
import {fetchCheckins} from '../state/actions/fetchCheckins';
import {fetchExercises} from '../state/actions/fetchExercises';
import ItemList from './ItemList';
import StreakHeader from './StreakHeader';

const AppContainer = () => {
  const {loading} = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const onRefresh = React.useCallback(() => {
    dispatch(fetchExercises() as unknown as AnyAction);
    dispatch(fetchCheckins() as unknown as AnyAction);
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{height: '90%'}}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }>
      <View>
        <StreakHeader />
        <ItemList />
      </View>
    </ScrollView>
  );
};

export default AppContainer;
