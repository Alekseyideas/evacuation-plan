import React from 'react';
import { CloseIcon } from '../svg/CloseIcon';
import { Store } from '../../store';
import { IStore } from '../../store/types';
import StoreAction from '../../store/StoreAction';

export const PlanDataModal = () => {
  const { dispatch } = React.useContext<IStore>(Store);
  const Action = new StoreAction(dispatch);

  const closeHandler = () => Action.closeModal();

  return (
    <div className="modal">
      <div className="modal--inner">
        <button className="close-btn" onClick={closeHandler}>
          <CloseIcon />
        </button>
        <div className="form-group">
          <label>Назва підприємства:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Назва приміщення:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Посада керівника, що затверджує План:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>ПІБ керівника:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Дата затвердження Плану:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <button className="btn btn-def" onClick={closeHandler}>
            Зберегти
          </button>
        </div>
      </div>
    </div>
  );
};
