import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const MainSection = (props) => {
  const renderToggleAll = () => {
    const { numTodos, completedCount, actions } = props
    if (numTodos > 0) {
      return (
        <input className="toggle-all"
          type="checkbox"
          checked={ completedCount === numTodos }
          onChange={ actions.completeAll } />
      )
    }
  }

  const { visibleTodos, actions } = props

  return (
    <section className="main">
      { renderToggleAll() }
      <ul className="todo-list">
        { visibleTodos.map(todo =>
          <TodoItem key={ todo.id } todo={ todo } { ...actions } />
        )}
      </ul>
    </section>
  )
}

MainSection.propTypes = {
  visibleTodos: PropTypes.array.isRequired,
  numTodos: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
