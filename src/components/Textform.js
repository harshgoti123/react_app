import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.alart("converted to uppercase case","success")
  }

  const handleLowClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.alart("converted to lower case","success")
  }

  const handle = () => {
    let p = prompt("enter text that you want to find total number of word that you entered");
    let c = text.substring(p);
    let d = c.length;
    setC(d);
    setP(p);
    setText(text + p);
  }
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);

  }

  const [text, setText] = useState('');
  const [p, setP] = useState('');
  const [c, setC] = useState('');

  return (
   < div  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className={`mb-3`} >

        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
      <button className={`btn btn-primary mx-2  text-${props.color}`} onClick={handleUpClick}>convert to Uppercase</button>
      <button className={`btn btn-primary mx-2  text-${props.color}`} onClick={handleLowClick}>convert to Lppercase</button>
      <button className={`btn btn-primary mx-2  text-${props.color}`} onClick={handle}>entered word counter</button>

      <div className={`container my-3  `}>

        <h1>your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>you have get time for read text approximately {(text.split(" ").length) * 0.08} minute</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"enter a text to preview"}</p>
        <p>{p} has {c} time here</p>
      </div>
    </div>
  )
}
