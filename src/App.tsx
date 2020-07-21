import React from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import generateID2 from './utils/id2';
import { Home, Plan } from './pages';
import { Footer } from './components/Footer';
import { HelpModal } from './components/modals/HelpModal';
import { IStore } from './store/types';
import { Store } from './store';
import { PlanDataModal } from './components/modals/PlanDataModal';
import StoreAction from './store/StoreAction';
import { ROUTE_PATH } from './utils/routes';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  // const [loading, setLoading] = React.useState(true);
  const [id2, setId2] = React.useState(false);
  const { store, dispatch } = React.useContext<IStore>(Store);
  const Action = new StoreAction(dispatch);

  React.useEffect(() => {
    // setLoading(false);

    const fnToken = async () => {
      await localStorage.clear();
      generateID2(async (token: string | null) => {
        setId2(true);
        // setLoading(false);

        if (token) {
          console.log('token: ', token);
          dispatch(Action.setUser({ isAuth: true, token }));
          try {
            const res = await axios.request({
              method: 'GET',
              headers: {
                'X-ACCESS-TOKEN': token,
                // Connection: 'keep-alive'
              },
              url: 'https://service.mcfr.ua/Plan/api/',
            });
            console.log(res);
          } catch (e) {
            // console.log(e, 'error');
            // dispatch(Action.setUser({ isAuth: false, token: '' }));
            // dispatch(
            //   Action.checkUser({ error: true, message: e && e.toString() })
            // );
          }
        } else {
          localStorage.clear();
          dispatch(Action.setUser({ isAuth: false, token: '' }));
          // setLoading(false);
          // if (user.isLoggedIn) dispatch(logoutRequest);
          // setTimeout(() => {
          // 	dispatch(fetchMenuRequest());
          // }, 100);
        }
      });
    };
    if (!id2) {
      fnToken();
    }
  }, [Action, dispatch, id2]);

  const renderApp = () => {
    if (store.user?.isAuth) {
      return (
        <>
          <Route path="/" exact component={Home} />
          <Route path={ROUTE_PATH.plan} exact component={Plan} />
        </>
      );
    }
    return <Route path="/" component={Home} />;
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <Switch>{renderApp()}</Switch>
        <Footer />
        {store.modal.help && store.modal.open ? <HelpModal /> : null}
        {store.modal.dataPlan && store.modal.open ? <PlanDataModal /> : null}
      </div>
    </DndProvider>
  );
}

export default hot(App);
