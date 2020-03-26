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
          <div className="content container">
            <div className="col-md-6">
              <h1>The easiest way to access your student benefits</h1>
              <p>
                SFU has many resources that students can use to help them during
                their studies. The problem is that many students don’t know
                about these resources until later in their degree. When this
                happens resources go underutilized and students miss a full
                range of services they are entitled to by paying their tuition
                fees. Our project, SFUseful, is meant to create more awareness
                among students and to encourage students to take advantage of
                the many known resources currently available.
              </p>
              <br />
              <button className="actionBtn" onClick={() => this.turnOff()}>
                Get started
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.showSplashPage();
  }
}

export default SplashPageWrapper;
