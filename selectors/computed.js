import { visibilityFilterSelector, todosSelector } from './input'

import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../ducks/filter'

const selectTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const computedSelector = createSelector(
  visibilityFilterSelector,
  todosSelector,
  (visibilityFilter, todos) => {
    return {
      numTodos: todos.length,
      visibleTodos: selectTodos(todos, visibilityFilter),
      visibilityFilter,
      completedCount: todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
    }
  }
);

export default computedSelector