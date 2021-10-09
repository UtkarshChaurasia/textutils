import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    
    
    if(text.length===0) props.showAlert("Enter something!","warning");
    else
    { 
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase!","success");
    }
  };
  const handleLoClick = () => {
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = ()=>{
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
    setText("");
    props.showAlert("Text cleared!","success");
    }
  }

  const handleCopy = ()=>{
    
    var text = document.getElementById("myBox");
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
    }
  }

  const handleExtraSpace = ()=>{
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
    }
  }

  const handleEncode64 = ()=>{
    if(text.length===0) props.showAlert("Enter something!","warning");
    else
    { 
      let newText = btoa(text);
      setText(newText);
      props.showAlert("Encoded to base64!","success");
    }
  }

  
  const handleDecode64 = ()=>{
    if(text.length===0) props.showAlert("Enter something!","warning");
    else
    {
      try{
        let newText = atob(text);
      setText(newText);
      props.showAlert("Base64 decoded!","success");
      }
      catch(e){
        props.showAlert("Invalid String Entered!","warning");
      }
      
    }
  }

  const handleListen = ()=>{
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    }
  }

  const [text, setText] = useState("");
  return (
    
    <>
      <div className="container my-4" style={{color: props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            id="myBox"
            rows="9"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'#D3E0E9':'#061124', color: props.mode==='light'?'#061124':'white', border: props.mode==='light'?'solid 2px #e71414':'solid 2px #e55d66'}}
            
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary " onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleEncode64}>
          Encode to Base64
        </button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleDecode64}>
          Decode Base64
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleListen}>
          Listen
        </button>
        
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p className="my-4">{text.length>0?text:"Enter something in the textbox above to preview it here!"}</p>
      </div>
    </>
  );
}
