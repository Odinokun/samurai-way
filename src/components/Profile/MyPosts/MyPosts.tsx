import { FC } from 'react';

import { Post } from './Post/Post';

import s from './MyPosts.module.css';

interface IPostType {
  id: number;
  message: string;
  likesCount: number;
}

interface IProps {}

export const MyPosts: FC<IProps> = () => {
  const postsData: IPostType[] = [
    { id: 1, message: 'Hello world', likesCount: 12 },
    { id: 2, message: 'Lorem ipsum dolor sit amet.', likesCount: 11 },
    {
      id: 3,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quae, quia voluptatem quos voluptate quibusdam voluptatibus quas doloribus quidem. Quisquam, quod.',
      likesCount: 11,
    },
    {
      id: 4,
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, dignissimos?',
      likesCount: 11,
    },
    {
      id: 5,
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo repellat voluptas alias animi possimus. Officiis sunt aperiam libero? Quibusdam voluptas quam tempora nesciunt, voluptatibus soluta temporibus ipsum exercitationem pariatur quidem?',
      likesCount: 11,
    },
  ];

  const postsElements = postsData.map(post => (
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
