import React from 'react'

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg py-lg-3 navbar-light"
      style={{
        backgroundColor: '#f7f7f7'
      }}
    >
      <div className="container">
        <a href="/" className="navbar-brand mr-lg-5">
          <h2>G+ Notes</h2>
        </a>
      </div>
    </nav>
  )
}

export default Header
