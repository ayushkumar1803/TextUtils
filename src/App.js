// import logo from './logo.svg';
import './App.css';
//import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
//import About from './component/About';
import React,{useState} from 'react';

/*
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
*/

function App() {
  const [mode, setMode]=useState('light');
  const [btnText, btnSetText]=useState('Dark Mode');
 const [color,setColor]=useState('primary');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgba(40, 41, 114, 0.779)';
      btnSetText('Light Mode');
      setColor('default');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      btnSetText('Dark Mode');
      setColor('primary');
    }
  }
/*
  const toggleModeP =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#888';
      btnSetText('Light Mode');
      setColor('secondary');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      btnSetText('Dark Mode');
      setColor('primary');
    }
  }

  const toggleModeG =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='Green';
     // btnSetText('Light Mode');
     setColor('success');
    }
    else{
     setMode('light');
      document.body.style.backgroundColor='white';
      //btnSetText('Dark Mode');
      setColor('primary');
    }
  }
  */

  return (
   <>

 <Navbar title="Text-Utils" about="About" mode={mode} toggleMode={toggleMode} btnText={btnText}/>

 <div className="container my-3">
  {/*}
  <Routes>

  
     <Route exact path="/" element={<Textform mode={mode} color={color} heading="Enter the Text Below To Analyse:"></Textform>} />
     <Route exact path="/about" element={<About/>} />
    
    
  </Routes>

  */}
  <Textform mode={mode} color={color} heading="Enter the Text Below to Analyse:"></Textform>
  
 </div>

   </>
  );
}

export default App;
