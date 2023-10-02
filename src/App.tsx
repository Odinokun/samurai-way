import { Route } from 'react-router-dom';

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
  addPost: (postText: string) => void;
  updateNewPostText: (newText: string) => void;
}

export const App = ({ state, addPost, updateNewPostText }: IProps) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile
            profilePage={state.profilePage}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
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
