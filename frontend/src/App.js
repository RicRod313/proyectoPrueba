import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Components
import PrivateRoute from './core/PrivateRoute';
import Navbar from './components/navbar/Navbar';
import TemporaryDrawer from './components/sideDrawer/SideDrawer';

//Pages
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';

import './App.css';

function App() {

  const [openMenu, setOpenMenu] = useState(false);
  const user = useSelector((state) => state.auth);

  const accionAbrir = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Router>
      <div className="App">
        { /* Navbar */ }
        <Navbar openMenu={accionAbrir} />

        { /* SideDrawer */ }
        <TemporaryDrawer user={user} open={openMenu} onClose={accionAbrir} />

        <div className="container mt-5">
          <Routes>
            { /* HomePage */ }
            <Route path="/" element={<PrivateRoute auth={user.token ? true : false} component={ HomePage } />} />
            { /* LoginPage */ }
            <Route path="/login" element={<LoginPage />} />
            { /* SignupPage */ }
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
