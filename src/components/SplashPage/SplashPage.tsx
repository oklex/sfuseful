import React from "react";
import CheckIfMobile from "../../utils/checkIfMobile";
import "./SplashPage.scss";

interface ISplashPageWrapperProps {
  // children: JSX.Element;
}

interface ISplashPageWrapperState {
  isMobile: boolean;
  hide: boolean;
}

class SplashPageWrapper extends React.Component<
  ISplashPageWrapperProps,
  ISplashPageWrapperState
> {
  state = {
    isMobile: false,
    hide: false
  };

  componentDidMount = () => {
    this.setState({
      isMobile: CheckIfMobile(),
      hide: false
    });
  };

  turnOff = () => {
    this.setState({
      hide: true
    });
  };

  showSplashPage = () => {
    if (this.state.hide) {
      return <div></div>;
    } else {
      return (
        <div className="splashPage">
          <div className="heading d-flex justify-content-between">
            <h1>SFUseful</h1>
            <button className="closeSplashBtn" onClick={() => this.turnOff()}>
              x
            </button>
          </div>
<p>about our project</p>
        </div>
      );
    }
  };

  render() {
    return this.showSplashPage();
  }
}

export default SplashPageWrapper;
