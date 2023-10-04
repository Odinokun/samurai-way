import { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './MyPosts/Post/ProfileInfo/ProfileInfo';
import { IAction, IProfilePage } from '../../redux/types';

interface IProps {
  profilePage: IProfilePage;
  dispatch: (action: IAction) => void;
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
