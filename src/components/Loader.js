import React from 'react'
import ReactDOM from 'react-dom'

const Loader = () => {
  return ReactDOM.createPortal(
    <div id="preloader">
      <div id="status">
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>,
    document.querySelector('#loader')
  )
}

export default Loader
