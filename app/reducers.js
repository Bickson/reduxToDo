
import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER
} from './actionTypes';

import { VisibilityFilters } from './actions';

const initialState = { visibilityFilter: VisibilityFilters.SHOW_ALL, todos: [] }

function todoApp(state = initialState, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      })
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          return index === action.index ? Object.assign({}, todo, { completed: true }) : todo
        })
      })
    default:
      return state
  }
}

export default todoApp;