import React, { FC } from 'react';
import s from './Post.module.css';

interface IProps {}

export const Post: FC<IProps> = () => {
  return (
    <div className={s.item}>
      <div className={s.avatar}>
        <img
          src='https://images.mein-mmo.de/medien/2023/08/Rocky-Sly-Titel-780x438.jpg'
          alt='user'
        />
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat,
        delectus, ex reiciendis consectetur earum nobis eveniet possimus nemo
        nostrum ut aspernatur architecto odit modi quod, non facere tempora?
        Magnam ea esse accusamus exercitationem voluptates cum sunt hic dolorum,
        minus neque nulla! Necessitatibus ab quis placeat, molestias dicta
        assumenda doloribus.
      </span>
      <button>like</button>
      <button>dislike</button>
    </div>
  );
};
