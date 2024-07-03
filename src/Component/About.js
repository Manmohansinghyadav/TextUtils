import React, { useState } from 'react';

export default function About() {
    // const [mystyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btntext, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (mystyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         });
    //         setBtnText("Enable Light Mode");
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //             // border: '1px solid black'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // };

    return (
        <div className='container' >
            <h1 className='my-2'><b>About us</b></h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>Founder !</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <b>Manmohan singh</b> is the founder oof TextUtils it is a web application for <code>copy,paise,make UpperCase</code> in you text sentenses</div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b>Source code</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">All The code avelavel in the <a href=" https://github.com/ Manmohansinghyadav/my-app">Github.com</a> for free.
                         And also go for this url:- <code>https://github.com/Manmohansinghyadav/my-app</code> </div>
                    </div>
                </div>
                {/* <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div> */}
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    );
}
