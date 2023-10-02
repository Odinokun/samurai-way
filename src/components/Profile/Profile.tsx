import { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './MyPosts/Post/ProfileInfo/ProfileInfo';
import { IProfilePage } from '../../redux/types';
import { updateNewPostText } from '../../redux/state';

interface IProps {
  profilePage: IProfilePage;
  addPost: (postText: string) => void;
  updateNewPostText: (newText: string) => void;
}

export const Profile: FC<IProps> = ({ profilePage, addPost }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        newPostText={profilePage.newPostText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};
