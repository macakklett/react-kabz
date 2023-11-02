import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./StoreContext";

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <StoreContext.Consumer>
          {(store) => (<Navbar navBar={store.getState().navBar.navLinks}/>)}
        </StoreContext.Consumer>
        <div className="site-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/*" element={<DialogsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;