import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AddMovie from "./components/Movie/AddMovie";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/add/movie" component={AddMovie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
