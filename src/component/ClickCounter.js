import React, { Component } from "react";
import UpdatedComponent from "./withCount";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {this.props.name}CLicked {count} times
      </button>
    );
  }
}

export default UpdatedComponent(ClickCounter,5);
