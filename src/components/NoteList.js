import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotes, selectNote } from '../actions'

import NoData from './NoData'

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes()
  }

  getSelectedNote = item => {
    this.props.selectNote(item)
  }

  trimString = (string, length) => {
    return string.length > length ? string.substring(0, length) + '...' : string
  }

  renderedList = items => {
    return !items.length ? (
      <NoData title="No Data" />
    ) : (
      items.map(item => {
        if (item) {
          return (
            <li
              key={`row_${item._id}`}
              className="row border mt-1 row-hover list-group-item cursor"
              onClick={() => {
                this.getSelectedNote(item)
              }}
            >
              <div className="name">
                <h5>{this.trimString(item.title, 20)}</h5>
              </div>
              <p className="name">{this.trimString(item.body, 50)}</p>
              <Link
                to={`/notes/delete/${item._id}`}
                className="btn btn-light"
                style={{
                  float: 'right',
                  top: '10px',
                  position: 'absolute',
                  right: '10px'
                }}
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                X
              </Link>
            </li>
          )
        } else {
          return null
        }
      })
    )
  }
  render() {
    if (!this.props.notes) return null
    return (
      <div className="justify-content-left">
        <ul className="list-group">
          {this.renderedList(this.props.notes || [])}
        </ul>
      </div>
    )
  }
}

const mapStatesToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(
  mapStatesToProps,
  { fetchNotes, selectNote }
)(NoteList)
