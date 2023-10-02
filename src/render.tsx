import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import { addPost, updateNewPostText } from './redux/state';
import './index.css';
import { IState } from './redux/types';

interface IProps {
  state: IState;
}

export const rerenderEntireTree = (props: IProps) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={props.state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>
    , document.getElementById('root'));
};