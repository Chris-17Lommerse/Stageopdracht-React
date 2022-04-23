import './App.css';
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';


function App() {

    let [value, setValue] = useLocalStorage('name', '');

    return ( <
        input type = "text"
        onChange = {
            (event) => setValue(event.target.value)
        }
        value = { value }
        />
    );
}
export default App;