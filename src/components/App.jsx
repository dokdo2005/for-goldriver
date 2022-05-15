import "../css/App.css";
import MusicButton from "./musicButton";
import Header from "./header";
import MessageList from "./messageList";

function App() {
  return (
    <div className="App">
      <MusicButton />
      <Header />
      <MessageList />
    </div>
  );
}

export default App;
