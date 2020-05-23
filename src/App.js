import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter App</h2>
      <p>
        <span onClick={() => dispatch(decrement())}>-</span> {counter}{" "}
        <span onClick={() => dispatch(increment(2))}>+</span>
      </p>
      {isLogged ? <p>Logged in</p> : <p>Logged out</p>}
    </div>
  );
}

export default App;
