import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { IState } from './redux/types';
import './App.css';

interface IProps {
  state: IState;
}

export const App = ({ state }: IProps) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/profile'
            render={() => <Profile state={state.profilePage} />}
          />
          <Route
            path='/dialogs'
            render={() => <Dialogs state={state.dialogsPage} />}
          />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
