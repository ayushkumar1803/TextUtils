import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText]= useState('');

    const handleClick =()=>{
        let newtext= text.toUpperCase();
        setText(newtext);
    }

    const handleClick1 =()=>{
        let newtext= text.toLowerCase();
        setText(newtext);
    }

    const handleReset =()=>{
        let newtext='';
        setText(newtext);
    }

    const handleCopy =()=>{
      var copyText = document.getElementById("myBox");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
    }

    const handleTrim=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "))
    }


    const handleChange =(event)=>{
        setText(event.target.value);
    }

  return (
    <>
    
    <div className='container' style={{color:props.mode==='light'?'black':'beige'}}>
      <h2>{props.heading}</h2>
      <div className='mb-3'>
      <textarea rows='8' value={text} onChange={handleChange} className='form-control' id='myBox' style={{backgroundColor:props.mode==='light'?'rgba(40, 41, 114, 0.779)':'white', color:props.mode==='light'?'white':'black'}}></textarea>
      </div>
      <button className={`btn btn-${props.color} mx-1 my-1`} onClick={handleClick}>Convert To Uppercase</button>
      <button className={`btn btn-${props.color} mx-1 my-1`} onClick={handleClick1}>Convert To Lowercase</button>
      <button className={`btn btn-${props.color} mx-1 my-1`} onClick={handleReset}>Clear Text</button>
      <button className={`btn btn-${props.color} mx-1 my-1`}  onClick={handleCopy}>Copy</button>
      <button className={`btn btn-${props.color} mx-1 my-1`}  onClick={handleTrim}>Remove Extra Spaces</button>
     
    <br></br>
    </div><br></br>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h2>Summary</h2><br></br>
     
    <h4>Characters: {text.length}</h4>
    <h4>Words: {text.split(' ').length-1}</h4>
    <h4>Avg.Time to Read: {0.008* (text.split(' ').length)-0.008}</h4>
    </div>
    </>
  )
}
