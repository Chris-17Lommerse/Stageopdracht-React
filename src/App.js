import './App.css';
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App.js';
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

export default App;

function Form() {

    const [name, setName] = useState("");

    return ( <
        form >
        <
        label > Enter your name:
        <
        input type = "text"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        /> 
        </label> 
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < Form / > );