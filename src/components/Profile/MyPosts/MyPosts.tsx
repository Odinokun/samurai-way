import { createRef, FC } from 'react';

import { Post } from './Post/Post';

import { IPost } from '../../../redux/types';
import s from './MyPosts.module.css';

interface IProps {
  posts: IPost[];
  addPost: (postText: string) => void;
}

export const MyPosts: FC<IProps> = ({ posts, addPost }) => {
  const postsElements = posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);
  
  const newPostElement = createRef<HTMLTextAreaElement>();
  
  const addPostHandler = () => {
    const text = newPostElement.current?.value;
    addPost(text || '');
    console.log('My Posts click => ', posts);
  };
  
  return (
    <div>
      <h3>My posts</h3>
      
      <div>
        <textarea ref={newPostElement} placeholder="new post"></textarea>
        <button onClick={addPostHandler}>Add new post</button>
      </div>
      
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
