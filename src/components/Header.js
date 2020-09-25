import React from 'react'

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: '#f7f7f7'
      }}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand mr-lg-5">
          <h4 className="text-muted">G+ Notes</h4>
        </a>
      </div>
    </nav>
  )
}

export default Header
