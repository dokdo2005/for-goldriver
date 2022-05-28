import { React, useState, useEffect } from "react";
import axios from "axios";
import "../css/font.css";
import "../css/messageList.css";
import NoImage from "../images/no_image.jpg";

function MessageList() {
  const [messageList, setMsgList] = useState([]);

  useEffect(() => {
    const getMessageList = async () => {
      const list = await axios.get(
        `${import.meta.env.VITE_API_URI}/messageData.json`
      );
      setMsgList(list.data.messages);
    };
    getMessageList();
    return setMsgList([]);
  }, []);

  return (
    <div className="msgListContainer">
      {messageList.map((message) => (
        <div className="msgListEntry" key={message.id}>
          <div className="msgImage">
            <img src={message.image || NoImage} width={"100%"} />
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
