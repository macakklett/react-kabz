import React, { createRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // debugger;
// console.log(props);
  let dialogElements = props.state.friends.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messageElements = props.state.messages.map((sms) => (
    <Message message={sms.message} />
  ));

  let newMessage = createRef();

  const onAddMessageHandler = () => {
    props.addMessage();
  }
  const onChangeMessageHandler = () => {
    props.changeMessage(newMessage.current.value);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <div>
        <div>
          <textarea onChange={onChangeMessageHandler} ref={newMessage} value={props.state.textareaValue} placeholder="Enter message"/>
        </div>
        <div>
          <button onClick={onAddMessageHandler}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
