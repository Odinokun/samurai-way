import { createRef, FC } from 'react';

import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

import { IDialogsPage } from '../../redux/types';
import s from './Dialogs.module.css';

interface IProps {
  state: IDialogsPage;
}

export const Dialogs: FC<IProps> = ({ state }) => {
  const dialogsElements = state.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  
  const messagesElements = state.messagesData.map(message => (
    <Message key={message.id} message={message.message} />
  ));
  
  const newMessageElement = createRef<HTMLTextAreaElement>();
  const addMessage = () => console.log(newMessageElement.current?.value);
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement} placeholder="Enter your message"></textarea>
          <button onClick={addMessage}>Add new message</button>
        </div>
      </div>
    </div>
  );
};
