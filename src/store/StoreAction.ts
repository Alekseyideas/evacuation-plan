import { IAction, EActionTypes, IModal, IUser } from './types';
export default class StoreAction {
  dispatch: IAction | any;
  constructor(dispatch: IAction | any) {
    this.dispatch = dispatch;
  }

  public setUser = ({ isAuth, token }: IUser) => {
    return this.dispatch({
      type: EActionTypes.SET_USER,
      payload: { isAuth, token },
    });
  };

  public openModal = (payload: IModal) =>
    this.dispatch({
      type: EActionTypes.OPEN_MODAL,
      payload: { open: true, ...payload },
    });
  public closeModal = () =>
    this.dispatch({
      type: EActionTypes.CLOSE_MODAL,
    });

  public setLoading = (payload: boolean) =>
    this.dispatch({
      type: EActionTypes.SET_LOADING,
      payload,
    });

  public setEditMode = (payload: boolean) =>
    this.dispatch({
      type: EActionTypes.SET_EDIT_MODE,
      payload,
    });
  public setApply = (payload: boolean) =>
    this.dispatch({
      type: EActionTypes.TRANSFORM_APPLY,
      payload,
    });
}
