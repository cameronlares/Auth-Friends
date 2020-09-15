import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { FriendsList } from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> My Best Friends</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends-list">friends-list</Link>
            <Link to="/add-friend">add friend</Link>
          </li>
        </ul>
        <Route path="/api/login" component={Login} />{" "}
        <Switch>
          <PrivateRoute
            exact
            path="/friends-list"
            component={FriendsList}
          ></PrivateRoute>
          <PrivateRoute path="/add-friend" component={AddFriend}></PrivateRoute>
          <Route path="/api/login" component={Login} />{" "}
          {/* history, match, location */}
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
