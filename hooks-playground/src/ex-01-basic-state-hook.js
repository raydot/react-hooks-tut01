import React, { useState } from "react";

const Ex01 = () => {
  // Declare a new state variable called count with a new setCount function to operate on it.
  // Notice that {count} can be used directly in the code, and there's "this.state.anything"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Ex 01</h3>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click it!</button>
    </div>
  );
};

export default Ex01;
