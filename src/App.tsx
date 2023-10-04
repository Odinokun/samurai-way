import { Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { IAction, IState } from './redux/types';
import './App.css';

interface IProps {
  state: IState;
  dispatch: (action: IAction) => void;
}

export const App = ({ state, dispatch }: IProps) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile
            profilePage={state.profilePage}
            dispatch={dispatch}
          />}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs dialogsPage={state.dialogsPage} />}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};
