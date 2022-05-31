import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./mainScreen";
import MessageScreen from "./messageScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="list" element={<MessageScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
