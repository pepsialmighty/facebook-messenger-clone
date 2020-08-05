import React, { useState, useEffect } from "react";
import { Button, FormControl, Input } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { db, auth } from "../../firebase";
import firebase from "firebase";

import "./Dashboard.css";
import Message from "../Message/Message";

const Dashboard = (props) => {
  const { username } = props;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div>
      <div className='dashboard__content'>
        <div className='dashboard__logo'>
          <img src={require("../../asset/Pepsigram.png")} />
        </div>
        <Button
          onClick={() => auth.signOut()}
          variant='outlined'
          className='dashboard__logoutBtn'
        >
          Logout
        </Button>

        <div>
          {username ? (
            <h1 className='dashboard__banner'>Welcome {username} !</h1>
          ) : (
            <h1 className='dashboard__banner'>Welcome Unknown User !</h1>
          )}
        </div>

        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
      <div className='dashboard__form'>
        <form>
          <FormControl className='dashboard__formControl'>
            <Input
              className='dashboard__input'
              placeholder='Enter a message...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <IconButton
              className='dashboard__iconButton'
              type='submit'
              onClick={sendMessage}
              variant='contained'
              color='primary'
              disabled={!input}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
