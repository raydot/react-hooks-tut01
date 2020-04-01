/**
 * Here's the same functionality as ex-09, but with hooks
 */

import { useEffect, useState } from "react";

function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // //...etc...
}

/**
 * HOOKS LET US SPLIT THE CODE BASED ON WHAT IT IS DOING
 * rather than a lifecycle method name.  React will apply every
 * effect used by the component, in the order they were specified.
 */
