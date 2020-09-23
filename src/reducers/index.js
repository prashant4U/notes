import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import noteReducer from '../reducers/noteReducer'
import selectedNoteReducer from '../reducers/selectedNoteReducer'

export default combineReducers({
  form: formReducer,
  notes: noteReducer,
  note: selectedNoteReducer
})
