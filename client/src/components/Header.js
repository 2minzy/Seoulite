import React, { useRef } from 'react';

const Header = ({ onSearch, onLocation }) => {
  const inputElement = useRef(null); // render functuin didn't excuted yet(null)

  const onSubmit = e => {
    e.preventDefault();
    const value = inputElement.current.value;
    onSearch(value);
  };

  const onKeyPress = e => {
    if (e.keyCode === 13) {
      const value = inputElement.current.value;
      onSearch(value);
    }
  };

  const getCurrentLocation = e => {
    e.preventDefault();
    console.log('clicked!');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(lat, lng);
        onLocation(lat, lng);
      });
    }
  };

  return (
    <div className='nav'>
      <a href='/' className='nav__logo'>
        Seoul<span>WIFI</span> Guide
      </a>
      <div className='nav__search'>
        <input
          type='text'
          className='nav__search__input'
          placeholder='Search location                                            ex) 서울역(seoul station)'
          ref={inputElement}
          onKeyDown={onKeyPress}
        />
        <button className='nav__search__btn' onClick={onSubmit}>
          SEARCH
        </button>
      </div>
      <button
        className='nav__current-location-btn'
        onClick={getCurrentLocation}
      >
        CURRENT LOCATION
      </button>
    </div>
  );
};

export default Header;
