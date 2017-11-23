import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../redux/actions/todoActions'

class TodoAdder extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {pending: ''};
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
            event.preventDefault();
            this.props.actions.addTodo(this.state.pending);
            this.setState({
              pending: ''
            })
          }}
      >
        <input
          type="text"
          onChange={(event) => this.setState({
            pending: event.target.value
          })}
          value={this.state.value}
        />
        <input
          type="submit"
          value="Add"
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  TodoAdder);
