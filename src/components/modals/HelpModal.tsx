import React from 'react';
import { CloseIcon } from '../svg/CloseIcon';
import { Store } from '../../store';
import { IStore } from '../../store/types';
import StoreAction from '../../store/StoreAction';

export const HelpModal: React.FC = () => {
  const { dispatch } = React.useContext<IStore>(Store);
  const Action = new StoreAction(dispatch);

  const closeHandler = () => Action.closeModal();

  return (
    <div className="modal">
      <div className="modal--inner">
        <button className="close-btn" onClick={closeHandler}>
          <CloseIcon />
        </button>
        <h2 className="modal-title">Підказка</h2>
        <p>
          {' '}
          <b>Крок 1. </b>За допомогою умовних позначень Стіни, Вікно, Дверний
          отвір, Сходи зробіть план приміщення.
        </p>
        <p>
          {' '}
          <b>Крок 2. </b>Розставте на плані умовні позначення Вихід, Запасний
          вихід, Шляхи евакуації, Напрямок до виходу.
        </p>
        <p>
          {' '}
          <b>Крок 3. </b>За допомогою умовних позначень вкажіть, де розташовані
          вогнегасники, пожежні сповіщувачі, пожежний кран-комплект, пожежна
          драбина, телефон.
        </p>
        <p>
          {' '}
          <b>Крок 4. </b>Для кращої орієнтації працівників вкажіть, де вони
          перебувають, за допомогою знаку «Ви перебуваєте тут».
        </p>
        <p>
          На допомогу:&nbsp;
          <a
            className="link"
            href="https://esop.mcfr.ua/716921"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://esop.mcfr.ua/716921
          </a>
        </p>
        <div className="d-flex">
          <button className="btn btn-def" onClick={closeHandler}>
            Зрозумів
          </button>
        </div>
      </div>
    </div>
  );
};
