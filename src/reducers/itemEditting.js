import * as types from './../constants/ActionTypes'

var initialState = {
  id: '',
  name: '',
  status: false
}

var myReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.EDIT_TASK:
      var newTask = action.task
      return newTask
    case types.CLEAR_TASK:
      var newTask = {
        name: '',
        id: '',
        status: false
      }
      return newTask
    default: return state;
  }
}

export default myReducer;
