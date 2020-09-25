import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_NOTE,
  FETCH_NOTES,
  FETCH_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  SELECTED_NOTE
} from './types'
import { api } from '../apis/axios'
import history from '../history'

export const setSingIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const setSingOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createNote = formValues => {
  return async (dispatch, getState) => {
    const { userId } = '4444' //getState().auth
    const response = await api.post('/notes', {
      ...formValues,
      userId: userId
    })
    dispatch({
      type: CREATE_NOTE,
      payload: response.data
    })
  }
}

export const fetchNotes = () => {
  return async dispatch => {
    const response = await api.get('/notes')
    dispatch({
      type: FETCH_NOTES,
      payload: response.data
    })
  }
}

export const fetchNote = id => {
  return async dispatch => {
    const response = await api.get('/notes/' + id)
    dispatch({
      type: FETCH_NOTE,
      payload: response.data
    })
  }
}

export const editNote = (id, formValues) => {
  return async dispatch => {
    const response = await api.post('/notes/' + id + '/edit', formValues)
    dispatch({
      type: EDIT_NOTE,
      payload: response.data
    })
    history.push('/notes')
  }
}

export const deleteNote = id => {
  return async dispatch => {
    //const response =
    await api.post('/notes/' + id + '/edit')
    dispatch({
      type: DELETE_NOTE,
      payload: id
    })
    history.push('/notes')
  }
}

export const selectNote = selectNoteObj => {
  return async dispatch => {
    //const response =
    await selectNoteObj
    dispatch({
      type: SELECTED_NOTE,
      payload: selectNoteObj
    })
  }
}
