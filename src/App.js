import { Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:movieId" element={<Detail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
