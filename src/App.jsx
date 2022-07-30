import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.num !== prevState.num) return { num: nextProps.num };
  //   return null;
  // }

  shouldComponentUpdate(newProps, nextState, nextContext) {
    if (this.state.num !== newProps.num) return false;
    return true;
  }

  render() {
    console.log("Child");
    return <>Child</>;
  }
}

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(num);
  });
  return (
    <>
      <Child />
      <button onClick={() => setNum(num + 1)}>{num}</button>
    </>
  );
}

export default App;
