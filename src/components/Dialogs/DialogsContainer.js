import { addNewMessageActionCreator, changeNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

let state = props.store.getState();

  const onAddMessage = () => {
    props.store.dispatch(addNewMessageActionCreator());
  }
  const onChangeMessage = (text) => {
    props.store.dispatch(changeNewMessageActionCreator(text));
  }

  return <Dialogs state={state.dialogsPage} addMessage={onAddMessage} changeMessage={onChangeMessage} />
};

export default DialogsContainer;