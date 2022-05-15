import "../css/messageScreen.css";
import MusicButton from "./musicButton";
import Header from "./header";
import MessageList from "./messageList";

function MessageScreen() {
  return (
    <div className="messageScreen">
      <MusicButton />
      <Header />
      <MessageList />
    </div>
  );
}

export default MessageScreen;
