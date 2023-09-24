import { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './MyPosts/Post/ProfileInfo/ProfileInfo';
import { IProfilePage } from '../../redux/types';

interface IProps {
  state: IProfilePage;
  addPost: (postText: string) => void;
}

export const Profile: FC<IProps> = ({ state, addPost }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={state.postsData} addPost={addPost} />
    </div>
  );
};
