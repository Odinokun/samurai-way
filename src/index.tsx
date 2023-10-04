import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import { store } from './redux/store';

import './index.css';
import { IState } from './redux/types';

const rerenderEntireTree = (_state: IState) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>
    , document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));