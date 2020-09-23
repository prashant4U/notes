import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { createNote, editNote, fetchNotes, selectNote } from '../actions'
import NoteForm from './NoteForm'

class createNoteContainer extends Component {
  state = { showForm: false }
  onSubmitHandler = formValues => {
    if (this.props.isEdit) {
      this.props
        .editNote(this.props.selectedNote._id, {
          ...formValues,
          btnAction: 'Update'
        })
        .then(() => {
          this.props.fetchNotes()
        })
    } else {
      this.props.createNote(formValues).then(() => {})
      this.props.selectNote({})
      this.setState({ showForm: false })
    }
  }

  showHideFormControl = showForm => {
    this.setState({ showForm })
    this.props.selectNote({})
  }

  render() {
    return (
      <div>
        <NoteForm
          onSubmitHandler={this.onSubmitHandler}
          showHideFormControl={this.showHideFormControl}
          showForm={this.state.showForm}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  selectedNote: state.note,
  isEdit: !_.isEmpty(state.note)
})

export default connect(
  mapStateToProps,
  { createNote, editNote, fetchNotes, selectNote }
)(createNoteContainer)
