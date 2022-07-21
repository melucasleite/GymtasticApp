import {AnyAction} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCheckins} from '../state/actions/fetchCheckins';
import {useColorScheme} from 'react-native';
const StreakHeader = () => {
  const {checkins} = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const streakDays = checkins.length;
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    dispatch(fetchCheckins() as unknown as AnyAction);
  }, []);
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Text style={isDarkMode ? styles.streakTextDark : styles.streakText}>
        Streak
      </Text>
      <Text style={isDarkMode ? styles.streakTextDark : styles.streakText}>
        {streakDays}{' '}
        {streakDays == 0 ? 'days' : streakDays > 1 ? 'days' : 'day'}
      </Text>
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
  cardDarkMode: {
    backgroundColor: 'black',
  },
  streakTextDark: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    marginTop: 5,
  },
});
