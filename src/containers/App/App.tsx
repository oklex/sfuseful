import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import "./App.scss";
import Error404 from "../Error404/Error404";

class App extends React.Component<{}, {}> {
  showServicesList = () => {
    return (
      <div>
        <h1>list here</h1>
      </div>
    );
  };

  showContact = () => {
    return (
      <div>
        <h1>contact us</h1>
      </div>
    )
  }

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
