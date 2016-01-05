import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../ducks/filter'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

const MainSection = (props) => {
  const handleClearCompleted = () => {
    const atLeastOneCompleted = props.todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      props.actions.clearCompleted()
    }
  }

  const handleShow = (filter) => {
    props.actions.changeFilter(filter);
  }

  const renderToggleAll = (completedCount) => {
    const { todos, actions } = props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
          type="checkbox"
          checked={ completedCount === todos.length }
          onChange={ actions.completeAll } />
      )
    }
  }

  const renderFooter = (completedCount) => {
    const { todos, visibilityFilter } = props
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={ completedCount }
                activeCount={ activeCount }
                filter={ visibilityFilter }
                onClearCompleted={ handleClearCompleted }
                onShow={ handleShow } />
      )
    }
  }

  const { todos, visibilityFilter, actions } = props

  const filteredTodos = todos.filter(TODO_FILTERS[visibilityFilter])
  const completedCount = todos.reduce((count, todo) =>
    todo.completed ? count + 1 : count,
    0
  )

  return (
    <section className="main">
      { renderToggleAll(completedCount) }
      <ul className="todo-list">
        { filteredTodos.map(todo =>
          <TodoItem key={ todo.id } todo={ todo } { ...actions } />
        )}
      </ul>
      { renderFooter(completedCount) }
    </section>
  )
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
