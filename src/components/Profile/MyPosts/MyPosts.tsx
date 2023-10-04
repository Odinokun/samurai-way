import { createRef, FC } from 'react';

import { Post } from './Post/Post';

import { IActionsTypes, IPost } from '../../../redux/types';
import { addPostAC, updateNewPostTextAC } from '../../../redux/store';
import s from './MyPosts.module.css';

interface IProps {
  posts: IPost[];
  newPostText: string;
  dispatch: (action: IActionsTypes) => void;
}

export const MyPosts: FC<IProps> = ({
  posts,
  newPostText,
  dispatch,
}) => {
  const postsElements = posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);
  const newPostElement = createRef<HTMLTextAreaElement>();
  
  const addPostHandler = () => dispatch(addPostAC());
  const onPostChange = () => {
    const action: IActionsTypes = updateNewPostTextAC(newPostElement.current!.value);
    dispatch(action);
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
