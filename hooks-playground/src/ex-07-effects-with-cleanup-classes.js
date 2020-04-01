/**
 * Some effects require cleanup.  Like setting up a subscription to an external data source.
 * It's important in this case to clean up so we don't introduce a memory leak.
 *
 * In a React class, you would typically set up a subscription in componentDidMount, and clean it up in
 * componentWillUnmount.  For example, here is a ChatAPI module that lets us subscribe to a friend's
 * online status.  Using a class:
 */

class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this); // ick!
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline == null) {
      return "Loading...";
    }
    return this.state.isOnline ? "Online" : "Offline";
  }
}

/**
 * Notice how ComponentDidMount and componentWillUnmount need to mirror each other.
 * Lifecycle methods force us to split this logic even though conceptually the code
 * inside is related to the same effect.  (This also needs a componentDidUpdate(), but it's just an example.)
 */
