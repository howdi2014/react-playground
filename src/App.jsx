import { useEffect } from "react";
import "./App.css";

function Child1() {
  useEffect(() => {
    console.log("Child1");
  });
  return (
    <>
      <Child2 />
    </>
  );
}
function Child2() {
  useEffect(() => {
    console.log("Child2");
  });
  return <></>;
}
function App() {
  useEffect(() => {
    console.log("App! the parent");
  });
  return (
    <div className="App">
      <Child1 />
    </div>
  );
}

export default App;
