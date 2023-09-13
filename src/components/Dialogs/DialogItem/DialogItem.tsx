import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

interface IProps {
  id: number;
  name: string;
}

export const DialogItem: FC<IProps> = ({ id, name }) => {
  const path = `${'/dialogs/' + id}}`;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  );
};
