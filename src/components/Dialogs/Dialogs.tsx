import { ChangeEvent, FC } from 'react';

import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

import { IActionsTypes, IDialogsPage } from '../../redux/types';
import s from './Dialogs.module.css';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/store';

interface IProps {
  dialogsPage: IDialogsPage;
  dispatch: (action: IActionsTypes) => void;
}

export const Dialogs: FC<IProps> = ({ dialogsPage, dispatch }) => {
  const dialogsElements = dialogsPage.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  
  const messagesElements = dialogsPage.messagesData.map(message => (
    <Message key={message.id} message={message.message} />
  ));
  
  const newMessageBody = dialogsPage.newMessageBody;
  const addMessage = () => dispatch(sendMessageAC());
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateNewMessageBodyAC(e.target.value));
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter message" />
          <button onClick={addMessage}>Add new message</button>
        </div>
      </div>
    </div>
  );
};
