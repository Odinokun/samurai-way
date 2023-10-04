export interface IStore {
  _state: IState;
  getState: () => IState;
  _callSubscriber: (_state: IState) => void;
  subscribe: (observer: (state: IState) => void) => void;
  dispatch: (
    action:
      IActionAddPost |
      IActionUpdateNewPostText |
      IActionUpdateNewMessageBody,
  ) => void;
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
export type IAction = IActionAddPost | IActionUpdateNewPostText | IActionUpdateNewMessageBody;

export interface IActionAddPost {
  type: 'ADD-POST';
}

export interface IActionUpdateNewPostText {
  type: 'UPDATE-NEW-POST-TEXT';
  newText: string;
}

export interface IActionUpdateNewMessageBody {
  type: 'UPDATE-NEW-MESSAGE-BODY';
  newText: string;
}

// end: types for actions