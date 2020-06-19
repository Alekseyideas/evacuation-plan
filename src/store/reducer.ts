import { IState, IAction, EActionTypes, IModal } from './types';

export const initialModalState: IModal = {
  help: false,
  dataPlan: false,
  title: '',
  message: '',
  open: false,
};

export default function reducer(state: IState, action: IAction): IState {
  if (!action) return state;
  switch (action.type) {
    case EActionTypes.SET_USER:
      return {
        ...state,
        user: {
          isAuth: action.payload.isAuth,
          token: action.payload.token,
        },
      };
    case EActionTypes.OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case EActionTypes.HELP_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          help: true,
          open: true,
        },
      };
    case EActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: initialModalState,
      };
    case EActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case EActionTypes.SET_EDIT_MODE:
      return {
        ...state,
        editMode: action.payload,
      };
    case EActionTypes.TRANSFORM_APPLY:
      return {
        ...state,
        transformApply: action.payload,
      };
    default:
      return state;
  }
}
