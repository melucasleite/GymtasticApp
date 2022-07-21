import {AnyAction} from '@reduxjs/toolkit';
import {Text} from '@rneui/base';
import React from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createCheckin} from '../state/actions/createCheckin';
import {setCheckinDialogVisible} from '../state/appSlice';

const CheckinDialog = () => {
  const dispatch = useDispatch();
  const closeDialog = () => {
    dispatch(setCheckinDialogVisible(false));
  };
  const {checkinDialogVisible} = useSelector((state: any) => state.app);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle={'formSheet'}
        visible={checkinDialogVisible}
        onRequestClose={() => {
          closeDialog();
        }}>
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              dispatch(createCheckin() as unknown as AnyAction);
              return closeDialog();
            }}>
            <Text style={styles.textStyle}>Check-in</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 45,
    padding: 35,
    elevation: 2,
    height: 90,
    width: 200,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#ddd',
    padding: 10,
    width: '90%',
  },
});

export default CheckinDialog;
