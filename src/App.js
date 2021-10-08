import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'

function App() {
  const [Mode, setMode] = useState('light');
  document.body.style.fontFamily = 'Montserrat';

  const toggleMode = ()=>{
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#061124';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" mode={Mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
