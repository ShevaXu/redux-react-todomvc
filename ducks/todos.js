const ADD_TODO = 'todoMVC/todos/ADD_TODO'
const DELETE_TODO = 'todoMVC/todos/DELETE_TODO'
const EDIT_TODO = 'todoMVC/todos/EDIT_TODO'
const COMPLETE_TODO = 'todoMVC/todos/COMPLETE_TODO'
const COMPLETE_ALL = 'todoMVC/todos/COMPLETE_ALL'
const CLEAR_COMPLETED = 'todoMVC/todos/CLEAR_COMPLETED'

export const addTodo = (text) => ({ type: ADD_TODO, text })

export const deleteTodo = (id) => ({ type: DELETE_TODO, id })

export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })

export const completeTodo = (id) => ({ type: COMPLETE_TODO, id })

export const completeAll = () => ({ type: COMPLETE_ALL })

export const clearCompleted = () => ({ type: CLEAR_COMPLETED })

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? Object.assign({}, todo, { text: action.text })
          : todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}

export default reducer
