/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";
import MyContext from "./MyContext";

const MyState = (prop) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';

        }
    }
  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {prop.children}
    </MyContext.Provider>
  );
};

export default MyState;