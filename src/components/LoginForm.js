import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import history from '../history'

class LoginForm extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="invalid-feedback d-block">
          <div className="header">* {error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, type, placeholder, meta }) => {
    const className = `field ` + (meta.error && meta.touched ? 'error' : '')
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          className="form-control"
          type={type}
          placeholder={placeholder}
        />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }

  onSubmitHandler = () => {
    history.push('/notes')
  }

  render() {
    return (
      <div className="row justify-content-center pt-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body p-4">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center mt-0 font-weight-bold">
                  Login
                </h4>
                <p className="text-muted mb-4">Create custom notes</p>
              </div>

              <form
                className="needs-validation"
                onSubmit={this.props.handleSubmit(this.onSubmitHandler)}
              >
                <div className="form-group">
                  <Field
                    name="username"
                    component={this.renderInput}
                    type="text"
                    label="Username"
                    placeholder="Enter username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Field
                    name="password"
                    component={this.renderInput}
                    type="password"
                    label="Password"
                    placeholder="Enter Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-0 text-center pt-4">
                  <button className="btn btn-primary">
                    <strong>Login</strong>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const validate = formValues => {
  let errorObj = {}
  if (!formValues.username) errorObj.username = 'please Enter Username!'
  if (!formValues.password) errorObj.password = 'please Enter Password!'
  if (
    formValues.username &&
    formValues.password &&
    formValues.username !== 'g+notes@gmail.com' &&
    formValues.password !== 'g+testNotes'
  ) {
    errorObj.password = 'please Enter valid Username and Password!'
  }
  return errorObj
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm)
