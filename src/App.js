// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const displayalert = (message,type) =>{
    setalert({ 
      msg : message,
      type : type
     })
    
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const removecolor = () =>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }
  

  const tooglemode = (cls) => {
    removecolor();
    // console.log(cls)
    document.body.classList.add('bg-' + cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#132d53';
      displayalert("Dark Mode has been enabled", "success")

     
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      displayalert("Light Mode has been enabled", "success")
      // document.title = 'Text-Utilites-App'
    }
  }

  return (
   <>
   <BrowserRouter>
   <Navbar title = "Home " mode={mode} tooglemode={tooglemode} />
   <Alert alert = {alert} />
   <div className="container my-3">
    <Routes>
          <Route path="/" 
            element= {<TextForm displayalert={displayalert} heading = " Text Analyzer" mode={mode}  />} >
          </Route>
          <Route path="/About"
            element={<About mode={mode} />} >
          </Route>
     </Routes>
    </div>
   </BrowserRouter>
   </>
  );
}


export default App;
