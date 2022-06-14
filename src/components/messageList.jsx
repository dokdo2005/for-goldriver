import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../css/font.css";
import "../css/messageList.css";
import NoImage from "../images/no_image.jpg";
import CartoonEntry from "./cartoonEntry";

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
          {message.image ? (
            <a href={message.image} target="_blank">
              <div
                className="msgImage"
                style={{ backgroundImage: `url(${message.image})` }}
              >
                <div className="imageEnlarge">
                  <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                </div>
              </div>
            </a>
          ) : (
            <div
              className="msgImage"
              style={{ backgroundImage: `url(${NoImage})` }}
            ></div>
          )}
          <div className="msgWriter">
            {message.characterName}@{message.serverName}
          </div>
          <div className="msgContent">{message.content}</div>
        </div>
      ))}
      <CartoonEntry />
    </div>
  );
}

export default MessageList;
