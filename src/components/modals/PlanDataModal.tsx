import React from 'react';
import { CloseIcon } from '../svg/CloseIcon';
import { Store } from '../../store';
import { IStore } from '../../store/types';
import StoreAction from '../../store/StoreAction';
import { useForm } from '../../hooks/useForm';

const field1 = 'namePid';
const field2 = 'namePrim';
const field3 = 'posada';
const field4 = 'pib';
const field5 = 'date';
export const PlanDataModal = () => {
  const { dispatch } = React.useContext<IStore>(Store);
  const { store } = React.useContext<IStore>(Store);
  const { form, onChangeHandler, updateForm } = useForm({
    [field1]: {
      value: '',
    },
    [field2]: {
      value: '',
    },
    [field3]: {
      value: '',
    },
    [field4]: {
      value: '',
    },
    [field5]: {
      value: '',
    },
  });
  const { date, namePid, namePrim, pib, posada } = store;
  React.useEffect(() => {
    updateForm(field1, {
      value: namePid,
    });
    updateForm(field2, {
      value: namePrim,
    });
    updateForm(field3, {
      value: posada,
    });
    updateForm(field4, {
      value: pib,
    });
    updateForm(field5, {
      value: date,
    });
  }, [date, namePid, namePrim, pib, posada, updateForm]);
  const Action = new StoreAction(dispatch);

  const saveHandler = () =>
    Action.setPlanInfo({
      [field1]: form[field1].value,
      [field2]: form[field2].value,
      [field3]: form[field3].value,
      [field4]: form[field4].value,
      [field5]: form[field5].value,
    });
  const closeHandler = () => {
    Action.closeModal();
    saveHandler();
  };

  return (
    <div className="modal">
      <div className="modal--inner">
        <button className="close-btn" onClick={closeHandler}>
          <CloseIcon />
        </button>
        <div className="form-group">
          <label>Назва підприємства:</label>
          <input
            type="text"
            name={field1}
            value={form[field1].value}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Назва приміщення:</label>
          <input
            type="text"
            name={field2}
            value={form[field2].value}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Посада керівника, що затверджує План:</label>
          <input
            type="text"
            name={field3}
            value={form[field3].value}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>ПІБ керівника:</label>
          <input
            type="text"
            name={field4}
            value={form[field4].value}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Дата затвердження Плану:</label>
          <input
            type="date"
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            name={field5}
            value={form[field5].value}
            onChange={onChangeHandler}
          />
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
