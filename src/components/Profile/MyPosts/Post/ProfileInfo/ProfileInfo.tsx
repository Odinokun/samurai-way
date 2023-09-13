import React, { FC } from 'react';
import s from './ProfileInfo.module.css';

interface IProps {}

export const ProfileInfo: FC<IProps> = () => {
  return (
    <>
      <div className={s.banner}>
        <img
          src='https://images.unsplash.com/photo-1552288092-76e7d732366c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2771&q=80'
          alt='img'
        />
      </div>
      <div>ava + descr</div>
    </>
  );
};
