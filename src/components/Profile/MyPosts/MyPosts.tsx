import { FC } from 'react';

import { Post } from './Post/Post';

import { IPost } from '../../../redux/types';
import s from './MyPosts.module.css';

interface IProps {
  posts: IPost[];
}

export const MyPosts: FC<IProps> = ({ posts }) => {
  const postsElements = posts.map(post => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div>
      <h3>My posts</h3>

      <div>
        <textarea placeholder='new post'></textarea>
        <button>Add new post</button>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
