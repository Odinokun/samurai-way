import { createRef, FC } from 'react';

import { Post } from './Post/Post';

import { IPost } from '../../../redux/types';
import s from './MyPosts.module.css';

interface IProps {
  posts: IPost[];
}

export const MyPosts: FC<IProps> = ({ posts }) => {
  const postsElements = posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);
  
  const newPostElement = createRef<HTMLTextAreaElement>();
  
  const addPost = () => {
    const text = newPostElement.current?.value;
    console.log('My Posts click => ', text);
  };
  
  return (
    <div>
      <h3>My posts</h3>
      
      <div>
        <textarea ref={newPostElement} placeholder="new post"></textarea>
        <button onClick={addPost}>Add new post</button>
      </div>
      
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
