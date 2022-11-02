import React,{useState} from 'react'



export default function Textform(props) {
  const handleUpClick= ()=>{
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick= ()=>{
    console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick= ()=>{
    console.log("UpperCase was clicked" + text);
    let newText = ("");
    setText(newText)
  }
  const handleOnChange= (event)=>
  {
    console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText]=useState('');
  return ( 
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="TextArea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
     
      </>
  )
}
