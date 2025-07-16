import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+text);
    let newtext = text.toUpperCase();
    SetText(newtext);
}
const handleOnChange = (event)=>{
    console.log("On change");
    SetText(event.target.value)
}

  const [text, SetText] = useState('Enter text here');
  // correct way to change state : stateText = "jhjsdcj"
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upercase</button>
    </div>
  )
}
