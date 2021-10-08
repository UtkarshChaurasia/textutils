import React, {useState} from "react";

export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")
    document.title = "TextUtils - About"
   const toggleStyle = ()=>{
       if(myStyle.color === 'white'){
           setMyStyle({
               color: 'black',
               backgroundColor: 'white'
           })
           setBtnText("Enable Dark Mode")
       }
       else{
           setMyStyle({
            color: 'white',
            backgroundColor: '#1f2e2e'
           })
           setBtnText("Enable Light Mode")
       }
   }

  return (
    <div className="container" style={{color: props.mode==='light'?'black':'white'}} >
        <h1 className="my-4">About  </h1>
      <div className="accordion my-5" id="accordionExample" style={{border: "solid 3px #DF7D7D", borderRadius: "6px"}}>
        <div className="accordion-item">
        
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: props.mode==='light'?'#d3e0e9':'#061124', color: props.mode==='light'?'#061124':'white'}}
            >
              <strong>About TextUtils</strong>
              
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'#d3e0e9':'#061124', color: props.mode==='light'?'#061124':'white'}}>
            TextUtils is a utility which can make your day to day life by manipulating your text in the way you want.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: props.mode==='light'?'#d3e0e9':'#061124', color: props.mode==='light'?'#061124':'white'}}
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'#d3e0e9':'#061124', color: props.mode==='light'?'#061124':'white'}}>
              <ul>
                <li className="my-2">
                  Change lowercase text to uppercase.
                </li >
                <li>
                  Change lowercase text to uppercase.
                </li>
                <li className="my-2">
                  Remove Extra Space.
                </li>
                <li>
                  Copy text to clipboard.
                </li>
                <li className="my-2">
                  Encode or decode text into Base64.
                </li>
                <li>
                  Reading text is old fashion? Listen your content.
                </li>
                <li className="my-2">
                  Last but not the least, get count of words and characters of your text.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: props.mode==='light'?'#d3e0e9':'#061124', color: props.mode==='light'?'#061124':'white'}}
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'#d3e0e9':'#061124', color: props.mode==='light'?'#061124':'white'}}>
              This <strong>Text Utility</strong> software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
