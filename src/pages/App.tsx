import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
