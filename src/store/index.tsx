import React from 'react';
import reducer, { initialModalState } from './reducer';
import { IState, IStore } from './types';

const initialState: IState = {
  user: {
    isAuth: false,
    token: '',
  },
  namePid: '',
  namePrim: '',
  posada: '',
  pib: '',
  date: '',
  modal: initialModalState,
  loading: false,
  editedItem: null,
  editMode: false,
  transformApply: false,
};

export const Store = React.createContext<IStore>({
  store: initialState,
  dispatch: {
    type: '',
    payload: null,
  },
});

export function StoreProvider(props: any): JSX.Element {
  const [store, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ store, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
