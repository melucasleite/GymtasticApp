import {SpeedDial} from '@rneui/base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  setAddItemDialogVisible,
  setCheckinDialogVisible,
} from '../state/appSlice';

const ActionFab = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  return (
    <SpeedDial
      isOpen={open}
      icon={{name: 'edit', color: '#fff'}}
      openIcon={{name: 'close', color: '#fff'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}>
      <SpeedDial.Action
        icon={{name: 'add', color: '#fff'}}
        title="Add"
        onPress={async () => {
          setOpen(false);
          dispatch(setAddItemDialogVisible(true));
        }}
      />
      <SpeedDial.Action
        icon={{name: 'calendar-today', color: '#fff'}}
        title="Check-In"
        onPress={() => {
          setOpen(false);
          dispatch(setCheckinDialogVisible(true));
        }}
      />
    </SpeedDial>
  );
};

export default ActionFab;
