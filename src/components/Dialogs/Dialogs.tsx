import React, { FC } from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

interface IProps {}

export const Dialogs: FC<IProps> = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to='/dialogs/1' activeClassName={s.active}>
            Dimon
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2' activeClassName={s.active}>
            Olcha
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3' activeClassName={s.active}>
            Maryna
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4' activeClassName={s.active}>
            Margo
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5' activeClassName={s.active}>
            Luba
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello world</div>
        <div className={s.message}>Lorem ipsum dolor sit amet.</div>
        <div className={s.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quae, quia voluptatem quos voluptate quibusdam
          voluptatibus quas doloribus quidem. Quisquam, quod.
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
          dignissimos?
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo repellat
          voluptas alias animi possimus. Officiis sunt aperiam libero? Quibusdam
          voluptas quam tempora nesciunt, voluptatibus soluta temporibus ipsum
          exercitationem pariatur quidem?
        </div>
      </div>
    </div>
  );
};
