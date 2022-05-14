import React from "react";
import { messages } from "../json/messageData.json";

function MessageList() {
  return (
    <div className="msgListContainer">
      {messages.map((message) => (
        <div className="msgListEntry" key={message.id}>
          <div>
            {message.characterName}@{message.serverName}
          </div>
          <div>{message.content}</div>
          <div>{message.image ? <img src={message.image} /> : null}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
