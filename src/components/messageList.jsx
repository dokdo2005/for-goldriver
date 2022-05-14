import React from "react";
import "../css/font.css";
import "../css/messageList.css";
import { messages } from "../json/messageData.json";

function MessageList() {
  return (
    <div className="msgListContainer">
      {messages.map((message) => (
        <div className="msgListEntry" key={message.id}>
          <div className="msgImage">
            {message.image ? <img src={message.image} width={"100%"} /> : null}
          </div>
          <div className="msgWriter">
            {message.characterName}@{message.serverName}
          </div>
          <div className="msgContent">{message.content}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
