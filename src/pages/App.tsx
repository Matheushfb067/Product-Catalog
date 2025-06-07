import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  Switch,
} from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "./home";

const App = () => {
  return (
    <Router>
      <Link to="/" />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
