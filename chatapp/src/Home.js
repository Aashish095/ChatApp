import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { state } = useLocation();
  const [chatSocket, setchatSocket] = useState(null);
  const [message, setmessage] = useState("");
  const [textMessages, setTextMessages] = useState("");

  const name = state['info'];

  useEffect(() => {
    // connect the websocket with when name was changed
    const ws = new WebSocket(
      'ws://'
      + 'localhost' + ':8000'
      + '/ws/chat/'
      + name + '/'
    );

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (event) => {
      // # this will update the textmessage come from the channel
      const data = JSON.parse(event.data);
      const newMessage = data.message;
      setTextMessages(prevMessages => {
        return prevMessages + "\n" + newMessage;
      });
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setchatSocket(ws);

    return () => {
      ws.close();
    };
  }, [name]);

  const chatRoomMessages = (message) => {
    if (chatSocket && chatSocket.readyState === WebSocket.OPEN) {
      chatSocket.send(JSON.stringify({
        'message': message
      }));
    } else {
      console.log('WebSocket connection not open');
    }
    setmessage("");
  }

  const handleInputChange = (event) => {
    setmessage(event.target.value);
  }

  return (
    <>
      <header>
        <h1>Welcome to Chat Room</h1>
        {/*this will set the value come from the websocket and show in the textarea*/}
        <textarea value={textMessages} rows={10} cols={50} readOnly />
        {/*when we input something it show directly into the input and remove after click the submit*/}
        <input
          type="text"
          name="textValue"
          value={message}
          onChange={handleInputChange}
        />
        {/*button call the chatroom message to send the massage through channel*/}
        <button onClick={() => chatRoomMessages(message)}>Submit</button>
      </header>
    </>
  );
}

export default Home;