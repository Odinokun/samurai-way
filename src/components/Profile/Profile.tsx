import { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './MyPosts/Post/ProfileInfo/ProfileInfo';
import { IPost, IProfilePage } from '../../redux/types';

interface IProps {
  state: IProfilePage;
}

export const Profile: FC<IProps> = ({ state }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={state.postsData} />
    </div>
  );
};
