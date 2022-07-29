import React from "react";
import { useState } from "react";
import "./App.css";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "kim",
      lastName: "jisu",
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(
    //   `nextProps: ${JSON.stringify(nextProps)} prevState: ${JSON.stringify(
    //     prevState
    //   )}`
    // );
    console.log(nextProps.firstName, prevState.firstName);
    if (nextProps.firstName !== prevState.firstName)
      return { firstName: nextProps.firstName };
    else return null;
  }

  render() {
    return <>name: {this.state.firstName}</>;
  }
}

function App() {
  const [firstName, setFirstName] = useState("min");
  const [lastName, setLastName] = useState("");

  return (
    <div className="App">
      <Child firstName={firstName} lastName={lastName} />
      <br />
      <button onClick={() => setFirstName("minsu")}>button</button>
    </div>
  );
}

export default App;
