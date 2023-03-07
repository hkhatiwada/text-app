// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from "react";
import Alert from './components/Alert';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  const toggleColor = (value) => {
    console.log(value);
    setColor(value);
    document.body.style.backgroundColor = color;
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('white');
 const showAlert=(message ,type)=>{
 setAlert(
  {
    msg: message,
    type: type
 })
 setTimeout(() => {
  setAlert(null);
 }, 1500);
 }
  const toggleMode=()=>
  {
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#0e2a45';
        showAlert("dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled", "success");
      }
  }
  return (
    <>
   
  <Navbar title="HEMANT" about="ABOUT US" contact="CONTACT US" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} color={setColor} /> 
  <Alert alert={alert}/>

<div className="container">
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Form heading1="Enter the text to analyze below" mode={mode} showAlert={showAlert}  />} />
        </Routes>
        </div>  
  


  </>
    );
}

export default App;
