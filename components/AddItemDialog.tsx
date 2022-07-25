import {Text} from '@rneui/base';
import {withTheme} from '@rneui/themed';
import React from 'react';
import {Modal, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createExercise} from '../state/actions/createExercise';
import {setAddItemDialogVisible} from '../state/appSlice';

const AddItemDialog = () => {
  const dispatch = useDispatch();
  const closeDialog = () => {
    dispatch(setAddItemDialogVisible(false));
  };
  const [name, onChangeName] = React.useState('');
  const [weigth, onChangeWeigth] = React.useState('');
  const [sets, onChangeSets] = React.useState('');
  const [reps, onChangeReps] = React.useState('');

  const {addItemDialogVisible} = useSelector((state: any) => state.app);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle={'formSheet'}
        visible={addItemDialogVisible}
        onRequestClose={() => {
          closeDialog();
        }}>
        <View style={styles.centeredView}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            autoFocus
            placeholder="Exercise Name"
          />
          <Text>Weigth</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeWeigth}
            value={weigth}
            placeholder="Weigth"
            keyboardType="numeric"
          />
          <Text>Sets</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSets}
            value={sets}
            placeholder="Sets"
            keyboardType="numeric"
          />
          <Text>Reps</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeReps}
            value={reps}
            placeholder="Repetitions"
            keyboardType="numeric"
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              dispatch(
                createExercise({
                  name,
                  weigth,
                  reps,
                  sets,
                }),
              );
              return closeDialog();
            }}>
            <Text style={styles.textStyle}>Add Exercise</Text>
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
    backgroundColor: 'black',
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

export default AddItemDialog;
