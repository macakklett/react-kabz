import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App({ posts, dialogs, messages }) {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Navbar />
        <div className="site-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={posts}/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
