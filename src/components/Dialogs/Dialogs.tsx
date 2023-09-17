import { FC } from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

import s from './Dialogs.module.css';

interface IProps {}

export const Dialogs: FC<IProps> = () => {
  const dialogsData = [
    { id: 1, name: 'Dimon' },
    { id: 2, name: 'Olcha' },
    { id: 3, name: 'Maryna' },
    { id: 4, name: 'Margo' },
    { id: 5, name: 'Luba' },
  ];

  const messagesData = [
    { id: 1, message: 'Hello world' },
    { id: 2, message: 'Lorem ipsum dolor sit amet.' },
    {
      id: 3,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quae, quia voluptatem quos voluptate quibusdam voluptatibus quas doloribus quidem. Quisquam, quod.',
    },
    {
      id: 4,
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, dignissimos?',
    },
    {
      id: 5,
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo repellat voluptas alias animi possimus. Officiis sunt aperiam libero? Quibusdam voluptas quam tempora nesciunt, voluptatibus soluta temporibus ipsum exercitationem pariatur quidem?',
    },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.map(dialog => (
          <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={s.messages}>
        {messagesData.map(message => (
          <Message key={message.id} message={message.message} />
        ))}
      </div>
    </div>
  );
};
