import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ title, description, actions, onDissmiss }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        className="modal fade show"
        id="centermodal"
        onClick={onDissmiss}
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            onClick={e => {
              e.stopPropagation()
            }}
            className="modal-content"
          >
            <div className="modal-header">
              <h4 className="modal-title" id="myCenterModalLabel">
                {title}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={onDissmiss}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <h5>{description}</h5>
            </div>
            <div className="modal-footer">{actions}</div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
