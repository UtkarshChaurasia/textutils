import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("Uppercase was clicked");
    setText(event.target.value);
  };

  const handleClear = ()=>{
    setText("");
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

  }

  const handleListen = ()=>{
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }


//   let myStyle = {
//     color: 'white',
//     backgroundColor: '#1f2e2e'
// }


  const [text, setText] = useState("");
  return (
    
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="13"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'#061124', color: props.mode==='light'?'#061124':'white'}}
            
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary " onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleListen}>
          Listen
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p className="my-4">{text.length>0?text:"Enter something in the textbox above to preview it here!"}</p>
      </div>
      {/* <div className="container my-3">
        <button type="button" class="btn btn-primary">
          Enable Dark Mode
        </button>
      </div> */}
    </>
  );
}
