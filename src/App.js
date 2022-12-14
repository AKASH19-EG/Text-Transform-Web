import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';

function App() {
  const[mode,setMode] = useState('light');//whether dark mode is enable or not
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    }
    else{
      setMode('light');
      }
  }
  return (
    <>
    
  <Navbar title="TextTransformation" mode={mode} toggleMode={toggleMode}/>  
  <div className="container my-3">
    {<Textform heading="Enter the valid text"/>}
    {/*<About/>*/}
  </div>
    </>
  );
}

export default App;
