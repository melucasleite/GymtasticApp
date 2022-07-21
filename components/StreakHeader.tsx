import {AnyAction} from '@reduxjs/toolkit';
import {Card, Text} from '@rneui/base';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCheckins} from '../state/actions/fetchCheckins';

const StreakHeader = () => {
  const {checkins} = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const streakDays = checkins.length;
  useEffect(() => {
    dispatch(fetchCheckins() as unknown as AnyAction);
  }, []);
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Card>
        <Card.Title>Streak</Card.Title>
        <Card.Divider />
        <Text style={styles.streakText}>
          {streakDays}{' '}
          {streakDays == 0 ? 'days' : streakDays > 1 ? 'days' : 'day'}
        </Text>
      </Card>
    </View>
  );
};

export default StreakHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  streakText: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 5,
  },
});
