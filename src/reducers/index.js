import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { CREATE_NOTE, EDIT_NOTE } from '../actions/types'
import noteReducer from '../reducers/noteReducer'
import selectedNoteReducer from '../reducers/selectedNoteReducer'

export default combineReducers({
  form: formReducer.plugin({
    NoteForm: (state, action) => {
      // <------ 'NoteForm' is name of form given to reduxForm()
      switch (action.type) {
        case CREATE_NOTE:
        case EDIT_NOTE:
          return undefined // <--- blow away form data
        default:
          return state
      }
    }
  }),
  notes: noteReducer,
  note: selectedNoteReducer
})
