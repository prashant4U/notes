import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotes, selectNote } from '../actions'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md'

import NoData from './NoData'
import Loader from './Loader'

class NoteList extends Component {
  state = { showLoader: true }
  componentDidMount() {
    this.props.fetchNotes().then(() => {
      this.setState({ showLoader: false })
    })
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
              className="row border mt-1 row-hover list-group-item"
            >
              <div className="name">
                <h5>{this.trimString(item.title, 20)}</h5>
              </div>
              <p className="name">{this.trimString(item.body, 50)}</p>
              <button
                className="btn btn-light cursor"
                style={{
                  float: 'right',
                  top: '10px',
                  position: 'absolute',
                  right: '75px'
                }}
                onClick={() => {
                  this.getSelectedNote(item)
                }}
              >
                <MdModeEdit size={24} />
              </button>
              <Link
                to={`/notes/delete/${item._id}`}
                className="btn btn-light cursor"
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
                <MdDeleteForever size={24} />
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
        {this.state.showLoader ? <Loader /> : ''}
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
