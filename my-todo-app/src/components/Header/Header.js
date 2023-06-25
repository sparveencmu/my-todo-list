import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    // acts as div
    <React.Fragment>
      <header className="appHeader">
        <h1 className="appTitle">My ToDo List 📃</h1>
      </header>
    </React.Fragment>
  )
}

export default Header