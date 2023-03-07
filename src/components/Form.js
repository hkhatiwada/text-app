import React from 'react'
import { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState('');


  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  const handleUpClick= ()=>{
    console.log("handle up click was clicked.");
    let newtext= text.toUpperCase();
      setText(newtext)
      props.showAlert("converted to upper case", "success");
  }
  const handleLoClick= ()=>{
    console.log("handle lo click was clicked.");
    let newtext= text.toLowerCase();
      setText(newtext)
      props.showAlert("converted to lower case", "success");
  }
  const handleTitleClick= ()=>{
    console.log("handle lo click was clicked.");
    let newText = toTitleCase(text)
    setText(newText)
    props.showAlert("converted to title case", "success");
  }
  const handleClearClick= ()=>{
    console.log("handle lo click was clicked.");
    let newText = '';
    setText(newText)
    props.showAlert("text has been cleared", "success");
  }
  const handleCopyClick= ()=>{
    console.log("handle copy click was clicked");
    var newText = document.getElementById("myBox");
    newText.select();
    newText.setSelectionRange(0,90999);
    navigator.clipboard.writeText(newText.value);
    props.showAlert("text has been copied", "success");
  }
  const handleClspClick= ()=>{
    console.log("handle clsp was clciked");
  
    var newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("extra spaces have been cleared", "success");
  }

  

  function handleOnChange(event) {
    console.log("handle on change was clicked.");
    setText(event.target.value);
  }
  return (
<>
<div className={`my-2 container style={{backgroudColor:props.mode==='light'?'#0e2a45':'white'}} text-${props.mode==='light'?'dark':'light'}`}>

                
                  <div className="container">
                    <h1> {props.heading1}</h1>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                    </div>
                   


                    <div className="container">
                    <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to upper case</button>
                    <button className="btn btn-secondary mx-1 my-2" onClick={handleLoClick}>Convert to lower case</button>
                    <button className="btn btn-warning mx-1 my-2" onClick={handleTitleClick}>Convert to title case</button>
                    <button className="btn btn-success mx-1 my-2" onClick={handleCopyClick}>Copy text </button>
                    <button className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear text </button>
                    <button className="btn btn-danger mx-1 my-2" onClick={handleClspClick}>Clear extra spaces </button>
                    </div>
             

            <div className="container">
            <h1>Your text summary is here</h1>
            <p>{text.trim().length } characters</p>
            <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
            <p>{0.008* text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} minutes read</p>
            <h1>Text preview is here</h1>
            <p style={{ fontWeight: 'bold' }}>{text}</p>
            </div>
  </div>            

</>
  )
}

