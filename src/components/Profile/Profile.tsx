import { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './MyPosts/Post/ProfileInfo/ProfileInfo';

interface IProps {}

export const Profile: FC<IProps> = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
