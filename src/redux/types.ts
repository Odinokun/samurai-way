export interface IStore {
  _state: IState;
  getState: () => IState;
  _callSubscriber: (_state: IState) => void;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
  subscribe: (observer: (state: IState) => void) => void;
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