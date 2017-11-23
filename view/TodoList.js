import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../redux/actions/todoActions'

class TodoList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <li key={todo}>{todo}</li>)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
      todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  TodoList);
