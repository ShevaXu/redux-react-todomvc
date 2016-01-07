const CHANGE_FILTER = 'todomvc/filter/CHANGE_FILTER'

export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'

export const changeFilter = (filter) => ({ type: CHANGE_FILTER, filter: filter })

const initialState = SHOW_ALL

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default reducer
