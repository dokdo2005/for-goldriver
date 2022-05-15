import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./mainScreen";
import MessageScreen from "./messageScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainScreen />} />
          <Route path="list" element={<MessageScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
