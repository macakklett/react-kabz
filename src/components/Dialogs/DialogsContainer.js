import { addNewMessageActionCreator, changeNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
  <StoreContext.Consumer>
  {(store) => 
    { let state = store.getState();

    const onAddMessage = () => {
      store.dispatch(addNewMessageActionCreator());
    }
    const onChangeMessage = (text) => {
      store.dispatch(changeNewMessageActionCreator(text));
    }
      
    return(
    <Dialogs 
      state={state.dialogsPage} 
      addMessage={onAddMessage} 
      changeMessage={onChangeMessage} />
    )
    }
  }
  
  </StoreContext.Consumer>
  )
};

export default DialogsContainer;