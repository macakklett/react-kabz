import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hello, how are you", likesCount: 6 },
        { id: 2, message: "Very good", likesCount: 10 },
        { id: 3, message: "not know about it", likesCount: 8 },
        { id: 4, message: "it`s cool", likesCount: 19 },
      ],
      textareaByDefault: "Please, write your post there!!!",
    },
    navBar: [
      { id: 1, navBarLink: "Messages" },
      { id: 2, navBarLink: "Profile" },
      { id: 3, navBarLink: "News" },
      { id: 4, navBarLink: "Music" },
      { id: 5, navBarLink: "Settings" },
      { id: 6, navBarLink: "Friends" },
    ],
  },
  _callSubscriber() {
    console.log("state was changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;