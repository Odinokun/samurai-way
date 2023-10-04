import { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './MyPosts/Post/ProfileInfo/ProfileInfo';
import { IActionsTypes, IProfilePage } from '../../redux/types';

interface IProps {
  profilePage: IProfilePage;
  dispatch: (action: IActionsTypes) => void;
}

export const Profile: FC<IProps> = ({ profilePage, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};
