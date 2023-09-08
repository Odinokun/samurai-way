import { FC } from 'react';
import s from './Profile.module.css';

interface IProps {}

export const Profile: FC<IProps> = () => {
  return (
    <div className={s.content}>
      <div className={s.banner}>
        <img
          src='https://images.unsplash.com/photo-1552288092-76e7d732366c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2771&q=80'
          alt='img'
        />
      </div>
      <div>ava + descr</div>
      <div>
        my posts
        <div>new post</div>
        <div className={s.posts}>
          <div className={s.item}>
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, sequi numquam. Velit sed illum, exercitationem facere
            saepe soluta aspernatur fuga.
          </div>
          <div className={s.item}>
            2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            aliquam suscipit, alias amet excepturi vel at facere aliquid
            accusantium error consectetur! Similique quisquam iure sequi
            voluptatum voluptates officia, nihil tenetur?
          </div>
        </div>
      </div>
    </div>
  );
};
