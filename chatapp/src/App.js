
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import React, {useState} from "react";

import * as events from "events"
import ChatRoom from "./ChatRoom";
import Home from "./Home";
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div><ChatRoom /></div>} />
                <Route path="/Home" element={<div><Home /></div>} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
//
// const App = () => {
//     const [name,setName] = useState("");
//     const [FullName,setFullName] = useState();
//     const inputEvent = (event) =>{
//         console.log('clicked');
//         setName(event.target.value)
//     };
//
//     const onSubmit = () => {
//         setFullName(name)
//     }
//     return (
//           <>
//         <div>
//           <h1> Enter Group Name {FullName} </h1>
//           <input type='text' placeholder='Enter you name' onChange={inputEvent} value={name}/>
//           <button onClick={onSubmit}>Click Me</button>
//         </div>
//       </>
//     );
// }
//
// export default App;
