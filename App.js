import './App.css';
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

// constructor(props); {
//     super(props);

//     this.state = {
//         item: [],
//         DataisLoaded: false
//     };
// }


// componentDidMoumt(); {
//     fetch(
//         "https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json()
//         .then((json) => {
//             this.setState({
//                 items: json,
//                 DataisLoaded: true
//             });
//         }))
// }
//     render(); {
//         const {DataisLoaded, items} = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Please wait some time... </h1> </div> ;
//         }
//             return (
//                 <div className= "App">
//                     <h1> Fetch data from an api in react </h1> {
//                         items.map((item) => (
//                             <ol key = { item.id } >
//                                 User_Name: {item.username},
//                                 Full_Name: {item.name},
//                                 User_Email: {item.email}
//                             </ol>
//                         ))
//                       }
//                 </div>
//             );
//         }



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