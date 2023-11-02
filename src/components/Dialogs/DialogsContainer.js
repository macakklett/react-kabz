import { addNewMessageActionCreator, changeNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(addNewMessageActionCreator());
    },

    onChangeMessage: (text) => {
      dispatch(changeNewMessageActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;