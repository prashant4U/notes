import _ from 'lodash'
import {
  CREATE_NOTE,
  FETCH_NOTES,
  FETCH_NOTE,
  DELETE_NOTE
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.payload[0]]
    case DELETE_NOTE:
      return _.omit(state, action.payload)
    case FETCH_NOTES:
      return action.payload
    default:
      return state
  }
}