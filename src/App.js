import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  document.body.style.fontFamily = 'Montserrat';

  const toggleMode = ()=>{
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#061124';
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#d3e0e9';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={Mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter Your Text To Analyze!" mode={Mode}/>
          </Route>
        </Switch>
        
       
      </div>
      </Router>
    </>
  );
}

export default App;
