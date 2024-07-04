import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUPclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearclick = () => {
    setText("");
    props.showAlert("All cleared", "success");
  };

  const handleCopyclick = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("The text is copied to the clipboard");
    }).catch((err) => {
      alert("Failed to copy: " + err);
    });
  };

  const handlePastclick = () => {
    navigator.clipboard.readText().then((ClipboardItem) => {
      setText(ClipboardItem);
      props.showAlert("Text pasted", "success");
    }).catch((err) => {
      alert("Failed to paste: " + err);
    });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPclick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handlePastclick}>Paste here</button>
        <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").filter(word => word !== "").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").filter(word => word !== "").length}</b> minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box to preview it!"}</p>
      </div>
    </>
  );
}
