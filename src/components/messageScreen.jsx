import React, { Suspense } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../css/messageScreen.css";
import MusicButton from "./musicButton";
import Header from "./header";
const MessageList = React.lazy(() => import("./messageList"));

function MessageScreen() {
  const scrollPosition = useScrollPosition();

  const scrollTop = () => {
    if (scrollPosition !== 0) {
      window.scroll(0, 0);
    }
  };

  return (
    <div className="messageScreen">
      <MusicButton />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <MessageList />
      </Suspense>
      {scrollPosition !== 0 ? (
        <button className="goTopButton">
          <FontAwesomeIcon icon={faArrowUp} onClick={() => scrollTop()} />
        </button>
      ) : null}
    </div>
  );
}

export default MessageScreen;
