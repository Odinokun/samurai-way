import { addPostAC, updateNewMessageBodyAC, updateNewPostTextAC } from './store';

export interface IStore {
  _state: IState;
  getState: () => IState;
  _callSubscriber: (_state: IState) => void;
  subscribe: (observer: (state: IState) => void) => void;
  dispatch: (action: IActionsTypes) => void;
}

export interface IState {
  dialogsPage: IDialogsPage;
  profilePage: IProfilePage;
}

// begin: types for DialogsPage
export interface IDialogsPage {
  dialogsData: IDialog[];
  messagesData: IMessage[];
}

export interface IDialog {
  id: number;
  name: string;
}

export interface IMessage {
  id: number;
  message: string;
}

// end: types for DialogsPage

// begin: types for ProfilePage
export interface IProfilePage {
  posts: IPost[];
  newPostText: string;
}

export interface IPost {
  id: number;
  message: string;
  likesCount: number;
}

// end: types for ProfilePage

// begin: types for actions
export type IActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updateNewPostTextAC> |
  ReturnType<typeof updateNewMessageBodyAC>;
// end: types for actions