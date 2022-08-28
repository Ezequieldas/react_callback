import { useState } from "react";
import './Box.css';

function Box(props) {

  const [count, updateCount] = useState(0);

  function click() {
    props.boxClicked(props.id);
    updateCount(count + 1);
  }

  return(
    <div className ="box" onClick={() => click()}>
      <p> <h2>Children box {props.id}</h2> </p>
      <p>Counter: <h3>{count}</h3> </p>
      <p>Dif with brother 1: {count - props.brotherCount1}</p>
      <p>Dif with brother 2: {count - props.brotherCount2}</p>
    </div>
  );
}

export default Box;