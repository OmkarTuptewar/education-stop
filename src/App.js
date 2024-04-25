import React from "react";

import { Route, Router, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Myhome from "./home";
import Payment from "./Payment";
import Contact from "./contact";
import  { useState, useEffect } from 'react';
import { createContext } from "react";


export const ThemeContext= createContext(null);
function App(){


const[theme,setTheme]=useState("dark")

const toggleTheme=()=>{

setTheme((curr)=>(curr==="light"?"dark":"light"))

}

  return (
    <>
<ThemeContext.Provider value={{theme,toggleTheme}}>
  <div className="App" id={theme}>



      <Routes>
        <Route path="/" element={<Myhome/>}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      </div>
      </ThemeContext.Provider>
      
    </>
  );

  }
export default App;
