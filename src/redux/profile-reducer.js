const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
      { id: 1, message: "Hello, how are you", likesCount: 6 },
      { id: 2, message: "Very good", likesCount: 10 },
      { id: 3, message: "not know about it", likesCount: 8 },
      { id: 4, message: "it`s cool", likesCount: 19 },
    ],
    textareaByDefault: "Please, write your post there!!!",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const post = {
            id: 5,
            message: state.textareaByDefault,
            likesCount: 0,
        };

        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(post);
        stateCopy.textareaByDefault = "";
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.textareaByDefault = action.newText;
            return stateCopy;
    
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => {
    return { type: ADD_POST };
}
  
export const changeNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
}

export default profileReducer;