import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Navbar navBar={props.store.getState().navBar.navLinks}/>
        <div className="site-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile store={props.store} />} />
            <Route path="/messages/*" element={<DialogsContainer store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;