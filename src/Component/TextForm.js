import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUPclick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way

    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">Enter Your Comment</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUPclick}>Convert to UPPERCASE</button>
        </div>
    );
}
