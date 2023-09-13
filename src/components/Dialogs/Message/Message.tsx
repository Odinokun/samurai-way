import React, { FC } from 'react';
import s from './Message.module.css';

interface IProps {
  message: string;
}

export const Message: FC<IProps> = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};
