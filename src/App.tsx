import React from 'react';
import { Header } from './components/Header';
import generateID2 from './utils/id2';
import { Home } from './pages';
import { Footer } from './components/Footer';
import { HelpModal } from './components/modals/HelpModal';
import { IStore } from './store/types';
import { Store } from './store';
import { PlanDataModal } from './components/modals/PlanDataModal';
import StoreAction from './store/StoreAction';

function App() {
  // const [loading, setLoading] = React.useState(true);
  const [id2, setId2] = React.useState(false);
  const { store, dispatch } = React.useContext<IStore>(Store);
  const Action = new StoreAction(dispatch);

  React.useEffect(() => {
    // setLoading(false);

    const fnToken = async () => {
      await localStorage.clear();
      generateID2((token: string | null) => {
        setId2(true);
        // setLoading(false);

        if (token) {
          console.log('token: ', token);

          dispatch(Action.setUser({ isAuth: true, token }));
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

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      {store.modal.help && store.modal.open ? <HelpModal /> : null}
      {store.modal.dataPlan && store.modal.open ? <PlanDataModal /> : null}
    </div>
  );
}

export default App;
