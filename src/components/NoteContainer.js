import React from 'react'

import NoteList from './NoteList'
import CreateNote from './CreateNote'

function NotesContainer() {
  let clientHeight =
    document.getElementsByTagName('html')[0].clientHeight - 100 + 'px'
  return (
    <div className="row justify-content-left">
      <div className="col-lg-4 col-sm-6 pr-0">
        <div className="card card-pricing shadow-none border">
          <div
            className="card-body text-left"
            style={{
              height: clientHeight,
              overflow: 'auto',
              backgroundColor: '#ffffff'
            }}
          >
            <NoteList />
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-sm-6 pl-0">
        <div className="card card-pricing shadow-none border">
          <div
            className="card-body"
            style={{
              height: clientHeight,
              overflow: 'auto',
              backgroundColor: '#ffffff'
            }}
          >
            <CreateNote />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotesContainer
