import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Register from "./components/UserManagement/Register";
import AddMovie from "./components/MovieDashobard/Movie/AddMovie";
import Dashboard from "./components/MovieDashobard/Dashboard";
import Login from "./components/UserManagement/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/add/movie" component={AddMovie} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/repertoire" component={Dashboard} />
            <Route exact path="/Login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
