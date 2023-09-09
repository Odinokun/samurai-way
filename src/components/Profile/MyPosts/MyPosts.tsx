import React, { FC } from 'react';
import { Post } from './Post/Post';
import s from './MyPosts.module.css';

interface IProps {}

export const MyPosts: FC<IProps> = () => {
  return (
    <div>
      <h3>my posts</h3>

      <div>
        <textarea placeholder='new post'></textarea>
        <button>Add new post</button>
      </div>

      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
