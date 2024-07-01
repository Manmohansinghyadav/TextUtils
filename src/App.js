
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor ='grey'
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor ='white'
    }
  }
  return (
    <>  
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my 3">
      <TextForm heading='Enter you Comment' mode={mode}/>
      <About/>
      </div>
    </>
  );
}

export default App;
