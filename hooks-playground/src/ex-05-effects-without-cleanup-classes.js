import React, { Component } from React

/**
 * Sometimes we want to run some additional after React has updated the DOM.  Network requests, manual DOM mutations, and logging are common examples of
 * effects that don't require a cleanup.  We say that because we can run them and immediately forget about them.  
 * This example is a comparison of how classes and hooks let React express such side effects.
 * 
 * In React class components, the render method itself shouldn't cause side effects.  It would be too early as we typically
 * want to perform our effects after React has updated the DOM.
 * 
 * This is why in React classes, we put side effects into componentDidMount and componentDidUpdate.  Here is a React counter 
 * class component that updates the document title right after React makes changes to the DOM.
 */

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <h3>Ex 05</h3>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click it!</button>
            </div>
        )
    }
}

/**
 * Note the code duplication!
 * 
 * This is because in many cases the same side effect needs to be performed regardless of whether the component just
 * mounted, or if it has been updated.  Conceptually this should happen after every render, but React class components
 * simply don't have a method like this.  We could extract a separate method, but we would still have to call it in two places.
 */