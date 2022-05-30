import useScrollPosition from "../hooks/useScrollPosition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../css/messageScreen.css";
import MusicButton from "./musicButton";
import Header from "./header";
import MessageList from "./messageList";

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
      <MessageList />
      {scrollPosition !== 0 ? (
        <button className="goTopButton">
          <FontAwesomeIcon icon={faArrowUp} onClick={() => scrollTop()} />
        </button>
      ) : null}
    </div>
  );
}

export default MessageScreen;
