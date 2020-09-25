import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { createNote, editNote, fetchNotes, selectNote } from '../actions'
import NoteForm from './NoteForm'
import Loader from './Loader'

class createNoteContainer extends Component {
  state = { showForm: false, showLoader: false }
  onSubmitHandler = formValues => {
    this.setState({ ...this.state, showLoader: true })
    if (this.props.isEdit) {
      this.props
        .editNote(this.props.selectedNote._id, {
          ...formValues,
          btnAction: 'Update'
        })
        .then(() => {
          this.props.fetchNotes().then(() => {
            this.props.selectNote({})
            this.setState({ ...this.state, showLoader: false })
          })
        })
    } else {
      this.props.createNote(formValues).then(() => {
        this.setState({ ...this.state, showLoader: false })
        this.props.selectNote({})
      })
      this.setState({ showForm: false })
    }
  }

  showHideFormControl = showForm => {
    this.props.selectNote({}).then(() => {
      this.setState({
        showForm
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.showLoader ? <Loader /> : ''}
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
