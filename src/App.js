import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Blog from "./components/Blog";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/blog" component={Blog} />
          <Route path="/article/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
