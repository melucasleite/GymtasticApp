import {AnyAction} from '@reduxjs/toolkit';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors, Drawer, Text, View} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import {deleteExercise} from '../state/actions/deleteExercise';
import {setEditItem, setEditItemDialogVisible} from '../state/appSlice';

export interface Item {
  name: string;
  reps: number;
  sets: number;
  weigth: number;
  id: number;
}

const ItemView = ({item}: {item: Item}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  return (
    <>
      <Drawer
        rightItems={[
          {
            text: 'Edit',
            background: Colors.blue30,
            onPress: () => {
              dispatch(setEditItemDialogVisible(true));
              dispatch(setEditItem(item));
            },
          },
        ]}
        leftItem={{
          text: 'Delete',
          background: Colors.red30,
          onPress: () => {
            dispatch(deleteExercise(item.id) as unknown as AnyAction);
          },
        }}>
        <View
          centerV
          padding-s4
          bg-white={!isDarkMode}
          bg-black={isDarkMode}
          style={styles(isDarkMode).itemView}>
          <Text text70 white={isDarkMode}>
            {item.name} - {item.sets} x {item.reps} x {item.weigth}Lb
          </Text>
        </View>
      </Drawer>
    </>
  );
};

const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    itemView: {
      height: 60,
    },
  });

export default ItemView;
