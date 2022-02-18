import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "./App.css";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";

// ................Pages............
import Home from "./components/Home/Home";
import Mint from "./components/Mint/Mint";
import SoldOut from "./components/SoldOut/SoldOut";

// ................Pages............End

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/mint" element={<Mint></Mint>}></Route>
          <Route path="/sold_out" element={<SoldOut></SoldOut>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
