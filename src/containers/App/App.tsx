import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import "./App.scss";
import Error404 from "../Error404/Error404";
import Contact from "../Contact/Contact";
import SearchList from "../SearchList/SearchList";
// import mockData from "../../data/mockData";
import SuperNavigation from "../../components/Navigation/SuperNavigation";
import SplashPageWrapper from "../../components/SplashPage/SplashPage";

class App extends React.Component<{}, {}> {
  showServicesList = () => {
    return (
      <div>
        <SearchList/>
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
          {/* <SuperNavigation /> */}
      <SplashPageWrapper/>
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
