import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
