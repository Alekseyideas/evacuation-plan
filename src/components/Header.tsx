import React from 'react';
import Logo from '../assets/images/logo_plan.png';
import { IStore } from '../store/types';
import { Store } from '../store';
import StoreAction from '../store/StoreAction';
export const Header: React.FC = () => {
  const { dispatch } = React.useContext<IStore>(Store);
  const Action = new StoreAction(dispatch);

  return (
    <header className="header">
      <div className="header__first">
        <div id="authButton">
          <div className="authButtonStyles__login--1uRBm authButtonStyles__ss--3M_hv">
            <div className="menu menu_type_user" id="login" />
          </div>
        </div>
      </div>
      <div className="header__second">
        <div className="container">
          <a href="https://service.mcfr.ua/ua/plan/">
            <img className="logo" alt="logo" src={Logo} />
          </a>
        </div>
        <div className="header__btns">
          <span
            className="btn btn-show-plan"
            onClick={() => Action.openModal({ help: true })}
          >
            Підказка
          </span>
          <span
            className="btn btn-show-plan"
            onClick={() => Action.openModal({ dataPlan: true })}
          >
            Заповнити дані Плану
          </span>
        </div>
      </div>
    </header>
  );
};
