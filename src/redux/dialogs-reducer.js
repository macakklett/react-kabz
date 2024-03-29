const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    friends: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Jora" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi!!!!!!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Fine" },
      { id: 4, message: "And you?" },
      { id: 5, message: "Me too" },
    ],
    textareaValue: ""
}

const dialogsReducer = (state = initialState, action) => {
  

    switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
        return {...state,
          textareaValue: action.newText
        };
            
        case ADD_MESSAGE: 
          let body = state.textareaValue;
          return {...state,
            textareaValue: "",
            messages: [...state.messages, {id: 6, message: body}]
          };
          
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
  }
  
  export const changeNewMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
  }

export default dialogsReducer;