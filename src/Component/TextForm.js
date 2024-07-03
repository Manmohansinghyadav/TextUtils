import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUPclick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","succes");
    };

    const handleLoclick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","succes");
    }

    const handleClearclick =() =>{
        setText("");
        props.showAlert("Boos all clear","succes");
    }
    const handleCopyclick =()=>{
        navigator.clipboard.writeText(text).then(()=>{
            alert("The text is copied in Clipboard");
        }).catch((err)=>{
            alert("Failed to copied" +err);
        })
    }
    const handlePastclick =()=>{
        navigator.clipboard.readText().then((ClipboardItem)=>{
            setText(ClipboardItem);
            props.showAlert("Sab Cipkgaya","succes");
        }).catch((err)=>{
            alert("Failed to paste"+err);
        })
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading} </h1> 
            

            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">Enter Your Comment</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUPclick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1"  onClick={handleCopyclick}>Copy Clipboard</button>
            <button className="btn btn-primary mx-1"  onClick={handlePastclick}>Paste hear</button>
            <button className="btn btn-primary mx-1"  onClick={handleClearclick}>Clear</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text Summary</h2>
            <p><b>{text.split(" ").length-1} </b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008 * text.split(" ").length}</b> Minuts to read</p>
            <h2  >Preview</h2>
            <p>{text.length>0?text : "Enter something in the taxt box to Preview IT!"}</p>
            
        </div>

        </>
    );
}
