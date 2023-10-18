import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messageElements = props.messages.map(sms => <Message message={sms.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  );
}

export default Dialogs;