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
      <View style={isDarkMode ? styles.circleDark : styles.circle}>
        <Text
          style={
            isDarkMode ? styles.streakTextHeaderDark : styles.streakTextHeader
          }>
          Streak
        </Text>
        <Text style={isDarkMode ? styles.streakTextDark : styles.streakText}>
          {streakDays}{' '}
          {streakDays == 0 ? 'days' : streakDays > 1 ? 'days' : 'day'}
        </Text>
      </View>
    </View>
  );
};

export default StreakHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'black',
  },
  circleDark: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
  },
  streakTextHeader: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'white',
  },
  streakText: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 5,
    color: 'white',
  },
  streakTextHeaderDark: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'black',
  },
  cardDarkMode: {
    backgroundColor: 'black',
  },
  streakTextDark: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    marginTop: 5,
  },
});
