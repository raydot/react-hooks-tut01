/**
 * In some cases, cleaning up or applying the effect after every render might create a 
 * peformance problem.  In class components, we can solve this by writing an extra comparison
 * with prevProps or prevState inside componentDidUpdate
 */

import { useEffect } from "react"

 componentDidUpdate(prevProps, prevState) {
     if (prevState.count !== this.state.count) {
         document.title = `You clicked ${this.state.count} times.`
     }
 }

 /** 
  * This requirement is common enough that it is build into the useEffect hook API.
  * You can tell React to *skip* applying an effect if certain values haven't changed
  * between re-renders.  To do so, pass an array as an optional second argument to useEffect.
  */

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]) // Only rerun the effect if count changes.

  /**
   * In the example above, we pass [count] as the second argument.  This means that if count
   * is 5, and React re-renders with count still equal to 5, React will skip the effect. 
   * That's the optimization.  If there are multiple items in the array, React will re-run
   * the affect if even one of them is different.  
   */

   // This also works for effects that have a cleanup phase:

   useEffect(() => {
       function handleStatusChange(status) {
           setIsOnline(status.isOnline)
       }

       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
       return () => {
           ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
       }
   }, [props.friend.id]) // Only resubscribe if props.friend.id changes

   /**
    * WHAT FOLLOWS LOGICALLY FROM THIS:
    * If this optimization is used, make sure the array includes all values
    * from the component scope (such as props and state) that change over time
    * and that are used by the effect.  Otherwise, your code will reference stale
    * values from previous renders.  
    * 
    * To run an effect and clean it up only once (mount/unmount), pass an empty array ([])
    * as a second arcument.  This tells React that the effect doesn't depend on any
    * values from props or state, so it never needs to re-run.  This follows directly
    * from how the dependencies array always works.
    * 
    * If an empty array is passed ([]), the props and state inside the effect will 
    * always have their initial values.  While passing [] as the second argument is
    * closer to the familiar componentDidMount and componentWillUnmount mental model, 
    * there are usually better solutions to avoid re-running effects too often.
    * (see reactjs.org/docs/hooks-faq.html)
    */