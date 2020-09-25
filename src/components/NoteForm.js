import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { selectNote } from '../actions'
import { MdAdd, MdArrowBack } from 'react-icons/md'

class NoteForm extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="invalid-feedback d-block">
          <div className="header">* {error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ` + (meta.error && meta.touched ? 'error' : '')
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          className="form-control"
          placeholder="Enter Title"
          type="text"
          autoFocus
          required
        />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }

  renderTextArea = ({ input, label, meta }) => {
    const className = `field ` + (meta.error && meta.touched ? 'error' : '')
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea
          {...input}
          autoComplete="off"
          className="form-control"
          placeholder="Enter Body"
          type="text"
          rows="10"
          required
        />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.showForm || this.props.isEdit ? (
          <div className="form-group mb-0 text-left pt-4 mt-4 mb-4">
            <button
              className="btn btn-light cursor"
              style={{
                float: 'right',
                top: '30px',
                position: 'absolute'
              }}
              onClick={() => {
                this.props.showHideFormControl(false)
              }}
            >
              <MdArrowBack size={24} />
            </button>
            <h4>{this.props.isEdit ? 'Edit Note' : 'Add Note'}</h4>
            <hr></hr>
          </div>
        ) : (
          <div className="form-group mb-0 text-right">
            <button
              className="btn btn btn-outline-dark"
              onClick={() => {
                this.props.showHideFormControl(true)
              }}
            >
              <MdAdd size={24} /> Add Note
            </button>
          </div>
        )}
        {this.props.showForm || this.props.isEdit ? (
          <form
            className="needs-validation"
            onSubmit={this.props.handleSubmit(this.props.onSubmitHandler)}
          >
            <div className="form-group">
              <Field
                name="title"
                component={this.renderInput}
                type="text"
                label="Title:"
                placeholder="Enter Title"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Field
                name="body"
                component={this.renderTextArea}
                type="text"
                label="Body:"
                placeholder="Enter Body"
                className="form-control"
                rows="10"
              />
            </div>
            <div className="form-group mb-0 text-right pt-4">
              <button className="btn btn-primary">
                {this.props.isEdit ? 'Update' : 'Save'}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    )
  }
}

const validate = formValues => {
  let errorObj = {}
  if (!formValues.title) errorObj.title = 'please Enter Title.'
  if (!formValues.body) errorObj.body = 'please Enter Body Text.'
  return errorObj
}

const mapStateToProps = state => {
  return {
    initialValues: !_.isEmpty(state.note)
      ? state.note
      : { title: '', body: '' },
    isEdit: !_.isEmpty(state.note)
  }
}

export default connect(
  mapStateToProps,
  { selectNote }
)(
  reduxForm({
    form: 'NoteForm',
    enableReinitialize: true,
    validate
  })(NoteForm)
)
