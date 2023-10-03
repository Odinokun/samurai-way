import { IPost, IState } from './types';

let rerenderEntireTree = (state: IState) => {
};

export const state: IState = {
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
};

export const addPost = () => {
  const newPost: IPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  rerenderEntireTree(state);
  state.profilePage.newPostText = '';
  state.profilePage.posts.push(newPost);
};

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer: (state: IState) => void) => {
  rerenderEntireTree = observer;
};