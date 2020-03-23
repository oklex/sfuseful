// this class should become a fixed expandable bar on mobile
import React from "react";
import CheckIfMobile from "../../utils/checkIfMobile";
import "./SidebarWrapper.scss";

interface ISidebarWrapperProps {
  children: JSX.Element;
}

interface ISidebarWrapperState {
  isMobile: boolean;
  hide: boolean;
}

class FiltersWrapper extends React.Component<
  ISidebarWrapperProps,
  ISidebarWrapperState
> {
  state = {
    isMobile: false,
    hide: true
  };

  componentDidMount = () => {
    this.setState({
      isMobile: CheckIfMobile(),
      hide: true
    });
  };

  showContents = () => {
    if (this.state.isMobile) {
      return (
        <div className="collapseOnMobile">
          <div className="sticky">
            <button
            className="darkBar"
              onClick={() => {
                this.setState({
                  hide: !this.state.hide
                });
              }}
            >
                {this.state.hide ? "show " : "hide "}
              filters
            </button>
          </div>
          <div className={this.state.hide ? "hide" : "show"}>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return this.props.children;
    }
  };

  render() {
    return this.showContents();
  }
}

export default FiltersWrapper;
