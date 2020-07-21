import { svgTypes } from '../global/svgTypes';

export interface IModal {
  help?: boolean;
  dataPlan?: boolean;
  title?: string;
  message?: string;
  open?: boolean;
  callBack?: () => void;
}

export interface IUser {
  isAuth: boolean;
  token: string;
}

export interface ICheckData {
  error: boolean;
  message: string;
}

export interface IState {
  user: IUser | null;
  namePid: string;
  namePrim: string;
  posada: string;
  pib: string;
  date: string;
  editedItem: IBox | null;
  modal: IModal;
  editMode: boolean;
  transformApply: boolean;
  readonly errors?: string | undefined;
  readonly loading: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IStore {
  store: IState;
  dispatch: IAction | any;
}

export interface ISetNameAction {
  payload: string;
}

export interface IModalAction {
  payload: IModal;
}
export interface IBox {
  id: string;
  left: number;
  top: number;
  name: svgTypes['tp'];
}

export interface IPlanInfo {
  namePid: string;
  namePrim: string;
  posada: string;
  pib: string;
  date: string;
}

export enum EActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_USER = 'SET_USER',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  RESET_MODAL = 'RESET_MODAL',
  HELP_MODAL = 'HELP_MODAL',
  SET_EDIT_MODE = 'SET_EDIT_MODE',
  SET_EDIT_ITEM = 'SET_EDIT_ITEM',
  DELETE_EDIT_ITEM = 'DELETE_EDIT_ITEM',
  TRANSFORM_APPLY = 'TRANSFORM_APPLY',
  SET_PLAN_INFO = 'SET_PLAN_INFO',
  CHECK_USER = 'CHECK_USER',
}
