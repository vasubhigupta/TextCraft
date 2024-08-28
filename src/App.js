//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null); 
    }, 3000)
  }  
  
  return (
    <Router>
      <Navbar title="TextCraft" aboutText="About Us" />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm showAlert={showAlert} heading="TextCraft" />}
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
