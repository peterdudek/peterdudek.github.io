import React from "react";
import Typed from "typed.js";

class TypedReactDemo extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 70,
      backSpeed: 70,
      smartBackspace: true,
      // shuffle: true,
      loop: true,
      loopCount: Infinity,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap margy">
        {/* <h1>About me</h1> */}
        <div className="type-wrap largeFont">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
        {/* <button onClick={() => this.typed.toggle()}>Toggle</button>
        <button onClick={() => this.typed.start()}>Start</button>
        <button onClick={() => this.typed.stop()}>Stop</button>
        <button onClick={() => this.typed.reset()}>Reset</button>
        <button onClick={() => this.typed.destroy()}>Destroy</button> */}
      </div>
    );
  }
}

export default TypedReactDemo;