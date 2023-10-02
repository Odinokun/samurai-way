import { createRef, FC } from 'react';

import { Post } from './Post/Post';

import { IPost } from '../../../redux/types';
import s from './MyPosts.module.css';

interface IProps {
  posts: IPost[];
  newPostText: string;
  addPost: (postText: string) => void;
  updateNewPostText: (newText: string) => void;
}

export const MyPosts: FC<IProps> = ({
  posts,
  newPostText,
  addPost,
  updateNewPostText,
}) => {
  const postsElements = posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);
  
  const newPostElement = createRef<HTMLTextAreaElement>();
  
  const addPostHandler = () => {
    addPost(newPostText || '');
    updateNewPostText('');
  };
  
  const onPostChange = () => {
    updateNewPostText(newPostElement.current!.value);
  };
  
  return (
    <div>
      <h3>My posts</h3>
      
      <div>
        <textarea
          ref={newPostElement}
          value={newPostText}
          onChange={onPostChange}
          placeholder="new post"
        />
        <button onClick={addPostHandler}>Add new post</button>
      </div>
      
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
