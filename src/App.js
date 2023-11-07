import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const NavbarContainer = {
  navBar: [
    { id: 1, navBarLink: "Messages" },
    { id: 2, navBarLink: "Profile" },
    { id: 3, navBarLink: "Users" },
    { id: 4, navBarLink: "News" },
    { id: 5, navBarLink: "Music" },
    { id: 6, navBarLink: "Settings" },
    { id: 7, navBarLink: "Friends" }
  ]
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
          <Navbar navBar={NavbarContainer.navBar}/>
        <div className="site-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;