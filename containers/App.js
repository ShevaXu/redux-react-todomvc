import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import * as TodoActions from '../ducks/todos'
import * as FilterAction from '../ducks/filter'
import selector from '../selectors/computed'

const App = (props) => {
  const { numTodos, visibilityFilter, visibleTodos, completedCount, actions } = props
  const renderFooter = () => {
    if (numTodos) {
      return (
        <Footer completedCount={ completedCount }
          activeCount={ numTodos - completedCount }
          filter={ visibilityFilter }
          onClearCompleted={ () => { actions.clearCompleted() } }
          onShow={ (filter) => { actions.changeFilter(filter) } } />
      )
    }
  }
  return (
    <div>
      <Header addTodo={ actions.addTodo } />
      <MainSection visibleTodos={ visibleTodos } numTodos={ numTodos } completedCount={ completedCount } actions = { actions } />
      { renderFooter() }
    </div>
  )
}

App.propTypes = {
  visibleTodos: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  numTodos: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

const AllActions = Object.assign({}, TodoActions, FilterAction)
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(AllActions, dispatch) })

export default connect(
  selector,
  mapDispatchToProps
)(App)
