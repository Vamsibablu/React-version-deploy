import PropTypes from "prop-types";
import React from "react";
import CountdownFn from "./components/countdown";
import MyDropzone from "./components/dropzone";
import IdleTimerContainer from "./components/idleTimer";
import InputMask from "react-input-mask";
import { useState } from "react";
import StyledApp from "./components/styled";
// Component
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 4,
    };
  }
  render() {
    return (
      <div>
        {/* printing all props */}
        <h1>
          {this.props.arrayProp}
          <br />

          {this.props.stringProp}
          <br />

          {this.props.numberProp}
          <br />

          {this.props.boolProp}
          <br />
        </h1>
        <CountdownFn />
        <MyDropzone />
        <IdleTimerContainer />
        {/* <InputMask
          value={this.state.value}
          mask="99-999999"
          placeholder="99-999999"
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        /> */}

        <StyledApp />
      </div>
    );
  }
}

// Validating prop types
App.propTypes = {
  arrayProp: PropTypes.array,
  stringProp: PropTypes.string,
  numberProp: PropTypes.number,
  boolProp: PropTypes.bool,
};

// Creating default props
App.defaultProps = {
  arrayProp: ["Ram", "Shyam", "Raghav"],
  stringProp: "GeeksforGeeks",
  numberProp: 10,
  boolProp: true,
};
