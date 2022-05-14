import "../css/App.css";
import Footer from "./footer";
import Header from "./header";
import MessageList from "./messageList";

function App() {
  return (
    <div className="App">
      <Header />
      <MessageList />
      <Footer />
    </div>
  );
}

export default App;
