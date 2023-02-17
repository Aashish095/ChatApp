import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as events from "events";

const ChatRoom = () => {
    const navigate = useNavigate()
    const [name,setName]= useState("");
    const goToContact = () =>{
      // console.log(name)

      navigate("/Home",{state:{"info":name}})
    };
    const inputEvent = (event)=>{
        // console.log(event.target.value)
        setName(event.target.value)

    };

    return <>
        <header>
            <h2>Chat Room</h2><br/>
            <input type="textarea"
              name="textValue"
              onChange={inputEvent}
              value={name}
            />
            <button onClick={() => goToContact()}>Submit</button>
        </header>
           </>
};

export default ChatRoom;
