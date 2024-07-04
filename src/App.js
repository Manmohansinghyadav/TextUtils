import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import Alerts from './Component/Alerts';
import React, { useState } from 'react';
import BgColor from './Component/BgColor';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 6000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
      setTimeout(() => {
        document.title = 'TextUtils Made BY Manmohan Singh';
      }, 2000);
      setTimeout(() => {
        document.title = 'Install now';
      }, 3500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';
    }
  };

  const handleColorChange = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <Router>
        <BgColor onColorChange={handleColorChange} />
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your Comment" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
