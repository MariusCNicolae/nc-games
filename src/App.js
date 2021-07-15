import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ReviewsList from "./Components/Reviews";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Route exact path="/game/:category">
          <ReviewsList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
