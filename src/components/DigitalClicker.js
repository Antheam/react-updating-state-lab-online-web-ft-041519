// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = { timesClicked: 0 };
  }

  updateNum = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      };
    });
  };

  render() {
    return <button onClick={this.updateNum}>{this.state.timesClicked}</button>;
  }
}

export default DigitalClicker;
