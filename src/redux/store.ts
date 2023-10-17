import { IPost, IState, IStore } from './types';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const store: IStore = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Dimon' },
        { id: 2, name: 'Olcha' },
        { id: 3, name: 'Maryna' },
        { id: 4, name: 'Margo' },
        { id: 5, name: 'Luba' },
      ],
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],
      newMessageBody: '',
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: 'Adidas vs Puma', likesCount: 11 },
      ],
      newPostText: '',
    },
  },
  _callSubscriber(state: IState) {
    console.log('State was changed => ', state);
  },
  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
    if (action.type === ADD_POST) {
      if (this._state.profilePage.newPostText.trim()) {
        const newPost: IPost = {
          id: 5,
          message: this._state.profilePage.newPostText.trim(),
          likesCount: 0,
        };
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = '';
        this._state.profilePage.posts.push(newPost);
      }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      if (action.newText) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      }
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      if (this._state.dialogsPage.newMessageBody.trim()) {
        const body = this._state.dialogsPage.newMessageBody.trim();
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messagesData.push({ id: 6, message: body });
        this._callSubscriber(this._state);
      }
    }
  },
};

export const addPostAC = () => (
  { type: ADD_POST } as const
);

export const updateNewPostTextAC = (newText: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
} as const);

export const sendMessageAC = () => (
  { type: SEND_MESSAGE } as const
);

export const updateNewMessageBodyAC = (body: string) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body,
} as const);
