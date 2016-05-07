
import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER
} from './actionTypes';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;

export function addTodo(text){
  return { type: ADD_TODO, id: nextTodoId++ ,text }
}

export function completeTodo(index){
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter){
  return { type: SET_VISIBILITY_FILTER, filter }
}
