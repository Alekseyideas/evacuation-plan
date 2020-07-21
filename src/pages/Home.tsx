import React from 'react';
import { Link } from 'react-router-dom';
import Plan from '../assets/images/plan_start.png';
import { IStore } from '../store/types';
import { Store } from '../store';
import { ROUTE_PATH } from '../utils/routes';
import { MainWrapperS } from '../global/styles';

export const Home: React.FC = () => {
  const { store } = React.useContext<IStore>(Store);
  const { user } = store;
  return (
    <MainWrapperS>
      <div className="container home">
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ marginTop: '20px' }}>
              Конструктор Плану евакуації на випадок пожежі
            </h1>
          </div>
        </div>
        <div className="row home-plan-wrapper">
          <div className="col-md-7">
            <img src={Plan} alt="Plan" />
          </div>
          <div className="col-md-5">
            <p>
              Сервіс допоможе скласти план приміщення, вказати розташування
              первинних засобів пожежогасіння, евакуаційні виходи та шляхи
              евакуації людей разі пожежі.
            </p>
            <p>
              У результаті отримаєте План евакуації людей, який зможете
              видрукувати і вивісити на видних місцях.
            </p>
            <p>
              Видрукувати План евакуації людей на випадок пожежі можуть тільки
              передплатники інформаційних продуктів напряму MCFR Охорона праці.
            </p>
            {user?.isAuth && !store.errors ? (
              <div className="btn-wrapper">
                <Link to={ROUTE_PATH.plan} className="btn btn-def">
                  Створити
                </Link>
              </div>
            ) : null}

            {store.errors ? (
              <p
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: store.errors }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </MainWrapperS>
  );
};
