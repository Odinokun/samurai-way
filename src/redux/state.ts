import { IPost, IState, IStore } from './types';

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
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: 'Adidas vs Puma', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 },
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
  
  addPost() {
    const newPost: IPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._callSubscriber(this._state);
    this._state.profilePage.newPostText = '';
    this._state.profilePage.posts.push(newPost);
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  
};

