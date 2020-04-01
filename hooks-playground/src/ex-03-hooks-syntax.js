// As a reminder, function components in React look like this:

const Example = props => {
  // Put hooks here!
  return <div />;
};

// Or this:

function Example(props) {
  // Put hooks here!
  return <div />;
}

/**
 * These were previously called "stateless components," but now with hooks React state can indeed
 * be used, so they're more properly called "function components."
 *
 * Hooks don't work inside classes, but they can be used as an alternative to writing classes.
 */

// Using multiple state variables

function ExampleWithManyStates() {
  // Declare multiple state variables
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
}

function handleOrangeClick() {
  // Similar to this.setState({ fruit: 'orange' })
  setFruit("orange");
}

// Unlike this.setState in a class, updating a state variable always replaces it
