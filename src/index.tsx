import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import { store } from './redux/state';

import './index.css';
import { IState } from './redux/types';

const rerenderEntireTree = (_state: IState) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>
    , document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));