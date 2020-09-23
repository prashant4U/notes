import {
  SELECTED_NOTE
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SELECTED_NOTE:
      return action.payload
    default:
      return state
  }
}