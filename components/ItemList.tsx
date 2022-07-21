import {AnyAction} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchExercises} from '../state/actions/fetchExercises';
import ItemView, {Item} from './ItemView';

const ItemList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExercises() as unknown as AnyAction);
  }, []);
  const {items} = useSelector((state: any) => {
    return state.app;
  });
  return items.map((item: Item, index: number) => (
    <ItemView key={index} item={item} />
  ));
};

export default ItemList;
