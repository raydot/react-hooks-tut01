import React, { useState, useEffect } from "react";

// The Effect Hook lets you perform side effects in function components:

export function Ex04() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times!`;
  });

  return (
    <div>
      <h3>Ex 04</h3>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click click click!</button>
    </div>
  );
}

/**
 * Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
 * Whether or not you're used to calling them that, you've likely performed them in your components before.
 *
 * The useEffect Hook can be thought of as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
 */

// This is something to look into.
// export default Ex04;
