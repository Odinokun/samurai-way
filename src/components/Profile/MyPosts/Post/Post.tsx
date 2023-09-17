import React, { FC } from 'react';
import s from './Post.module.css';

interface IProps {
  message: string;
  likesCount: number;
}

export const Post: FC<IProps> = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <div className={s.avatar}>
        <img
          src='https://images.mein-mmo.de/medien/2023/08/Rocky-Sly-Titel-780x438.jpg'
          alt='user'
        />
      </div>
      <span className={s.message}>{message}</span>
      <div className={s.footer}>
        <span className={s.likesCount}>
          likes: <b>{likesCount} </b>
        </span>
        <button>like</button>
        <button>dislike</button>
      </div>
    </div>
  );
};
