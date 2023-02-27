
import { useState } from 'react';
import './App.css';
import Alart from './components/Alart';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("dark");
  const [alart, setAlart] = useState(null);
  const showAlart = (message, type) => {
    setAlart({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlart(null);
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode("dark")
      setColor("light")
      document.body.style.backgroundColor = "#042743"
      showAlart("dark mode is aneble", "success")

    } else {
      setMode("light")
      setColor("dark")
      document.body.style.backgroundColor = "white"
      showAlart("light mode is aneble", "success")

    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} color={color}></Navbar>

        <Alart alart={alart} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<div className="container my-2"> <Textform heading="enter the text to analyse" alart={showAlart} mode={mode} color={color} /></div>} > 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
