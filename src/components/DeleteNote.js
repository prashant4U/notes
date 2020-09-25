import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNote, deleteNote, selectNote } from '../actions'
import Modal from './Modal'
import history from '../history'

class DeleteNote extends Component {
  componentDidMount() {
    let { id } = this.props.match.params
    this.props.fetchNote(id)
  }

  actions = (
    <React.Fragment>
      <button
        onClick={() => {
          let { id } = this.props.match.params
          this.props.deleteNote(id).then(() => {
            this.props.selectNote({}).then(() => {
              history.push('/notes')
            })
          })
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
      <button
        onClick={() => {
          history.push('/notes')
        }}
        className="btn btn-light"
      >
        Cancel
      </button>
    </React.Fragment>
  )

  onDissmiss = () => {
    history.push('/notes')
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Note"
          description={`Are you sure you want to delete note with title: ${this
            .props.note && this.props.note.title}?`}
          actions={this.actions}
          onDissmiss={this.onDissmiss}
        />
      </div>
    )
  }
}

const mapStatesToProps = (state, ownProps) => {
  return {
    note: state.note
  }
}

export default connect(
  mapStatesToProps,
  {
    fetchNote,
    deleteNote,
    selectNote
  }
)(DeleteNote)
