const initialState = {
    navLinks: [
        { id: 1, navBarLink: "Messages" },
        { id: 2, navBarLink: "Profile" },
        { id: 3, navBarLink: "News" },
        { id: 4, navBarLink: "Music" },
        { id: 5, navBarLink: "Settings" },
        { id: 6, navBarLink: "Friends" },
      ]
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer