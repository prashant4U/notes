import React from 'react'
import { Router, Route } from 'react-router-dom'
import '../css/styles.css'

import Header from './Header'
import LoginForm from './LoginForm'
import NoteContainer from './NoteContainer'
import DeleteNote from './DeleteNote'
import history from '../history'

function App() {
  return (
    <div>
      <div className="container-fluid p-0">
        <Header />
        <Router history={history}>
          <Route path="/" exact component={LoginForm} />
          <Route path="/notes" exact component={NoteContainer} />
          <Route path="/notes/delete/:id" exact component={DeleteNote} />
        </Router>
      </div>
    </div>
  )
}

export default App
