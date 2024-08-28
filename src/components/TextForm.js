import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function TextForm(props) {

  const [text,setText] = useState("");
  const [orgText, setOrgText] = useState("");

  const handleUpClick = () =>{
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","success");
  }

  const handleDownClick = () =>{
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success");
  }

  const handleOrgClick = () =>{
    setText(orgText);
    props.showAlert("Text converted to Original Text", "success");
  }

  const handleClearClick = () =>{
    setText(" ");
    props.showAlert("Text Cleared", "success");
  }

  const handleCapitalClick = () =>{
    const capital = text.slice(" ");
    for(let  i =0;i<capital.length;i++){
      
    }
  }
  
  const handleOnChange = (event) => {
    //console.log("On change")
    setOrgText(text);
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
 
  return (
    <>
    <div className= "container">
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8" ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Upper  Case</button>
      <button disabled={text.length === 0}className="btn btn-success mx-2 my-1" onClick={handleDownClick}>Convert to Lower Case</button>
      <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleOrgClick}>Convert to Original Text</button>
      {/* <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleCapitalClick}>Convert Word to Capital Letter</button> */}
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleClearClick}>Clear Text</button>

    </div>

    <div className='conntainer my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} character</p>
      <p>{0.008 * (text.split(" ").filter((element) => {return element.length !== 0}).length)} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
}