import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../ducks/todos'

const App = (props) => {
  const { todos, actions } = props;
  return (
    <div>
      <Header addTodo={ actions.addTodo } />
      <MainSection todos={ todos } actions = { actions } />
    </div>
  )
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(TodoActions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
