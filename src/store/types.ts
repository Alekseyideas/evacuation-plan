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

export interface IState {
  user: IUser | null;
  modal: IModal;
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

export enum EActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_USER = 'SET_USER',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  RESET_MODAL = 'RESET_MODAL',
  HELP_MODAL = 'HELP_MODAL',
}
