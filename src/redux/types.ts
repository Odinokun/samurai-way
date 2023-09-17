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
export interface IDialogsData {
  dialogsData: IDialog[];
}
export interface IMessage {
  id: number;
  message: string;
}
export interface IMessagesData {
  messagesData: IMessage[];
}
// end: types for DialogsPage

// begin: types for ProfilePage
export interface IProfilePage {
  postsData: IPost[];
}
export interface IPost {
  id: number;
  message: string;
  likesCount: number;
}
export interface IPostsData {
  postsData: IPost[];
}
// end: types for ProfilePage
