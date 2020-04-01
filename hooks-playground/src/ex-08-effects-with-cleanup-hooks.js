/**
 * With hooks, we don't need separate effects for setup and cleanup.  If an effect
 * returns a function, React will run it when it's time to clean up.
 */

 import React, { useState, useEffect } from 'react'

 function FriendStatus(props) {
     const [isOnLine, setIsOnLine] = useState(null)

     useEffect(() => {
         // Setup the function
         function handleStatusChange(status {
             setIsOnLine(status.isOnLine)
         })

         // Subscribe
         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
         
         // Specify how to clean up.  This doesn't have to be a named function.  An arrow function would also work.
         return function cleanup() {
             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
         }
     })

     if (isOnline === null) {
         return 'Loading...'
     }
     return isOnline ? 'Online' : 'Offline'
 }

 /**
  * WHY IS A FUNCTION RETURNED FROM THE EFFECT?
  * This is the optional cleanup mechanism for effects.  Every effect may return a function that
  * cleans up after it.  This lets -- for instance -- the logic for adding and removing subscriptions
  * close to each other.  They're part of the same effect and not two diferent methods.
  */

  /** 
   * WHEN EXACTLY DOES REACT CLEAN UP AN EFFECT?
   * React performs the cleanup when the component unmounts.  Remember that effects run for every render.
   * This is why react also cleans up effect from the previous render before running the next one.  This
   * behavior can be changed.
   */

