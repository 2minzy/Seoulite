import React, { useRef } from 'react'

const Header = ({ onSearch }) => {
  const inputElement = useRef(null); // render functuin didn't excuted yet(null)

  const onSubmit = e => {
    e.preventDefault();
    const value = inputElement.current.value;
    onSearch(value);
  }

  return (
    <nav className="nav">
      <div className="nav__logo">SeoulWIFI Guide</div>
      <div className="nav__search">
        <input type="text" className="nav__search__input" placeholder="Type district name" ref={inputElement}/>
        <button className="nav__search__btn" onClick={onSubmit}>SEARCH</button>
      </div>
    </nav>
  )
}

export default Header
