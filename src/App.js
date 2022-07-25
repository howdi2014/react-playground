import { useContext, useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";

function Child() {
  const { name } = useContext(MyContext);
  return <>{name}</>;
}
function Child2() {
  const { name } = useContext(MyContext);
  return <>{name}</>;
}
function App() {
  const [name, setName] = useState("Sam");
  return (
    <div className="App">
      <MyContext.Provider value={{ name, setName }}>
        <Child />
        <br />
      </MyContext.Provider>
      <Child2 />
    </div>
  );
}

export default App;
