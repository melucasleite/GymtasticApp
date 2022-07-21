import {AnyAction} from '@reduxjs/toolkit';
import {Text} from '@rneui/base';
import React from 'react';
import {Modal, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateExercise} from '../state/actions/updateExercise';
import {setEditItem, setEditItemDialogVisible} from '../state/appSlice';

const EditItemDialog = () => {
  const dispatch = useDispatch();
  const {editItem} = useSelector((state: any) => state.app);
  const {id, name, weigth, sets, reps} = useSelector(
    (state: any) => state.app.editItem,
  );
  const closeDialog = () => {
    dispatch(setEditItemDialogVisible(false));
  };
  const onChangeName = (value: any) => {
    dispatch(setEditItem({...editItem, name: value}));
  };

  const onChangeWeigth = (value: any) => {
    dispatch(setEditItem({...editItem, weigth: value}));
  };

  const onChangeSets = (value: any) => {
    dispatch(setEditItem({...editItem, sets: value}));
  };

  const onChangeReps = (value: any) => {
    dispatch(setEditItem({...editItem, reps: value}));
  };
  const {editItemDialogVisible} = useSelector((state: any) => state.app);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle={'formSheet'}
        visible={editItemDialogVisible}
        onRequestClose={() => {
          closeDialog();
        }}>
        <View style={styles.centeredView}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Exercise Name"
          />
          <Text>Weigth</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeWeigth}
            value={String(weigth)}
            placeholder="Weigth"
            keyboardType="numeric"
          />
          <Text>Sets</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSets}
            value={String(sets)}
            placeholder="Sets"
            keyboardType="numeric"
          />
          <Text>Reps</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeReps}
            value={String(reps)}
            placeholder="Repetitions"
            keyboardType="numeric"
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              dispatch(
                updateExercise({
                  id,
                  name,
                  weigth,
                  reps,
                  sets,
                }) as unknown as AnyAction,
              );
              return closeDialog();
            }}>
            <Text style={styles.textStyle}>Update Exercise</Text>
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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

export default EditItemDialog;
