import React, { FC } from 'react';
import s from './Header.module.css';

interface IProps {}

export const Header: FC<IProps> = () => {
  return (
    <header className={s.header}>
      <img
        src='https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png'
        alt='logo'
      />
    </header>
  );
};
