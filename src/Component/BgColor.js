import React from 'react';

export default function BgColor({ onColorChange }) {
  return (
    <div style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
      <button onClick={() => onColorChange("blue")} type="button" className="btn btn-primary m-1">Blue</button>
      <button onClick={() => onColorChange("green")} type="button" className="btn btn-success m-1">Green</button>
      <button onClick={() => onColorChange("red")} type="button" className="btn btn-danger m-1">Red</button>
      <button onClick={() => onColorChange("yellow")} type="button" className="btn btn-warning m-1">Yellow</button>
      <button onClick={() => onColorChange("white")} type="button" className="btn btn-light m-1">White</button>
      {/* <button onClick={() => onColorChange("black")} type="button" className="btn btn-dark m-1">Dark</button> */}
    </div>
  );
}
