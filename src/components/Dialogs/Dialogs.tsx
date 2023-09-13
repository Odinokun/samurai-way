import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

import s from './Dialogs.module.css';

interface IProps {}

export const Dialogs: FC<IProps> = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={1} name='Dimon' />
        <DialogItem id={2} name='Olcha' />
        <DialogItem id={3} name='Maryna' />
        <DialogItem id={4} name='Margo' />
        <DialogItem id={5} name='Luba' />
      </div>
      <div className={s.messages}>
        <Message message='Hello world' />
        <Message message='Lorem ipsum dolor sit amet.' />
        <Message
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quae, quia voluptatem quos voluptate quibusdam
          voluptatibus quas doloribus quidem. Quisquam, quod.'
        />
        <Message
          message='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
          dignissimos?'
        />
        <Message
          message='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo repellat
          voluptas alias animi possimus. Officiis sunt aperiam libero? Quibusdam
          voluptas quam tempora nesciunt, voluptatibus soluta temporibus ipsum
          exercitationem pariatur quidem?'
        />
      </div>
    </div>
  );
};
