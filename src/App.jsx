import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

// function Child() {}
// function Child2() {}
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /*
    useLayoutEffect에 2번째 인자가 없으므로 렌더링 발생하면 항상 실행.
    아래의 경우에는 상태 lastName 업데이트되면 리렌더링이 시작되고 useLayoutEffect 실행 
  */
  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");
  // });

  /* 
    lastName이 useEffect의 2번째 인자 `디펜던시 배열`에 추가되었으므로 
    lastName 업데이트시 실행
  */
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [lastName]);

  /*
    useLayoutEFfect의 2번째 인자 디펜던시를 빈 배열로 주게 되면
    1번째 렌더링 시에만 useLayoutEFfect 함수가 실행된다.
    그러므로 lastName이 업데이트되어 리렌더링이 시작되어도
    리렌더링 후에 useLayoutEffect는 실행되지 않는다.
  */
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, [lastName]);

  return (
    <div className="App">
      <button onClick={() => setFirstName("Mandu")}>Change First name</button>
      <button onClick={() => setLastName("kim")}>Change Last name</button>
    </div>
  );
}

export default App;
