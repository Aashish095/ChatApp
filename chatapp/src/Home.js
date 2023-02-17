import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import userEvent from "@testing-library/user-event";


const Home = () => {
    const {state} = useLocation();
    const { name } = state;
    let [chatSocket,setchatSocket]= useState("");
    let [message,setmessage]= useState("");

    useEffect(()=>{
        chatSocket = new WebSocket(
            'ws://'
            + 'localhost'+':8000'
            + '/ws/chat/'
            + name
            + '/'
        );
        console.log(chatSocket)
    },[name]);

    const ChatRoomMessages = (event) => {
        console.log(event.target)
    }

    const inputMessage = (event) => {
        setmessage(event.target.value)
    }

    return  (<>
        <header>
            <h1>welcome to chat Room</h1>
             <textarea name="postContent" rows={4} cols={40} />
            <input type="textarea"
              name="textValue"
              value={message}
              onChange={inputMessage}
            />
             <button onClick={() => ChatRoomMessages()}>Submit</button>
        </header>
           </>
  );
}

export default Home;