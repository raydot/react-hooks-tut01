// This code is a repeat of ex-04, but with more explanation

import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times!`;
  });

  return (
    <div>
      <h3>Ex 06</h3>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click up!</button>
    </div>
  );
}

/**
 * WHAT DOES useEffect DO?
 * This hook tells react that the component needs to do something after render.  React will
 * remember the function passed (the "effect") and call it later after performing the DOM updates.
 * The above effect sets the document title, but could also perform data fetching or call some other imperative API.
 */

/**
 * WHY IS useEffect CALLED INSIDE A COMPONENT?
 * Placing useEffect inside the component allows for control over the count state variable (or any props) right from the efftct.
 * No special API needed, it's already in the function scope.  Hooks embrace JavaScript closures and avoid introducing React-specific
 * APIs where Javascript already provides a solution.
 */

/**
 * DOES useEffect RUN AFTER EVERY RENDER?
 * Yes!  By default it runs both after the first render *and* after every update.  Instead of thinking in terms of
 * "mounting" and "updating" it might be easier to think that effects happen "after render."  React guarantees
 * that the DOM has been updated by the time it runs the effects.
 */
