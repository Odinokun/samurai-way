import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import { addPost, state, subscribe, updateNewPostText } from './redux/state';
import './index.css';
import { IState } from './redux/types';

interface IProps {
  state: IState;
}

const rerenderEntireTree = (props: IProps) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>
    , document.getElementById('root'));
};

rerenderEntireTree({ state });

subscribe(() => rerenderEntireTree({ state }));