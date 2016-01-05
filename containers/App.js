import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../ducks/todos'
import * as FilterAction from '../ducks/filter'

const App = (props) => {
  const { todos, visibilityFilter, actions } = props;
  return (
    <div>
      <Header addTodo={ actions.addTodo } />
      <MainSection todos={ todos } visibilityFilter={ visibilityFilter } actions = { actions } />
    </div>
  )
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({ todos: state.todos, visibilityFilter: state.visibilityFilter });

const AllActions = Object.assign({}, TodoActions, FilterAction);
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(AllActions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
