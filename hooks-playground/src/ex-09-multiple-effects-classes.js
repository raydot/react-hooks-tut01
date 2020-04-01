/**
 * This component combines the counter and friend status indicator logic from previous examples, with classes.
 */

class FriendStatusWithCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this); // ick again!
  }

  componentDidMount() {
    document.title = ` You clkcked ${this.state.count} times`;
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
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
}
//...etc...

/**
 * Note how the logic that sets document.title is split between componentDidMount and componentDidUpdate.
 * The subscription logic is also spread between componentDidMount and componentWillUnmount.
 * ComponentDidMount contains code for *both* tasks.
 */
