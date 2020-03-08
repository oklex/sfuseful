import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Helmet from "react-helmet";
import "./App.scss";
import Error404 from "../Error404/Error404";
import Contact from "../Contact/Contact";
import SearchList from "../SearchList/SearchList";
import mockData from "../../data/mockData";

class App extends React.Component<{}, {}> {
  showServicesList = () => {
    return (
      <div>
        <SearchList data={mockData} />
      </div>
    );
  };

  showContact = () => {
    return (
      <div>
        <Contact />
      </div>
    );
  };

  show404 = () => {
    return (
      <div>
        <Error404 />
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Helmet>

          <div className="navigation d-flex justify-content-between">
            <Link to={"/"}>
              <h1>SFUseful</h1>
            </Link>
            <Link to={"/contact"} className="nav-item">
              <p>contact us</p>
            </Link>
          </div>

          <Switch>
            <Route exact path="/" component={this.showServicesList} />
            <Route exact path="/contact" component={this.showContact} />
            <Route component={this.show404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
