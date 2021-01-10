import React, { useRef } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  font-family: 'Lato', sans-serif;
  padding: 0 60px;
  height: 100px;

  @media ${({ theme }) => theme.device.mobile} {
    height: 120px;
    flex-direction: column;
    padding: 20px 0;
  } ;
`;

const Logo = styled.a`
  font-family: 'Suez One', serif;
  color: #a8dba8;
  font-size: 1.8rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.4rem;
    margin-bottom: 2px;
  } ;
`;

const SearchContainer = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
    margin-bottom: 10px;
  } ;
`;

const SearchInput = styled.input`
  background-color: transparent;
  color: #c5e99b;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #c5e99b;
  width: 170px;
  height: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    border-width: 0 0 1px;
  } ;
`;

const SearchBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #c5e99b;
  font-size: 1rem;
  width: 100px;
  height: 30px;
  &:hover {
    color: #548687;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
  } ;
`;

const MyLocation = styled.button`
  background-color: #a8dba8;
  color: #548687;
  font-weight: 900;
  border-radius: 20px;
  width: 200px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: #548687;
    color: #a8dba8;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 140px;
  } ;
`;

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        onLocation(lat, lng);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <Nav>
        <Logo href='/'>Seoulite</Logo>
        <SearchContainer>
          <SearchBtn onClick={onSubmit}>SEARCH</SearchBtn>
          <SearchInput
            type='text'
            placeholder='e.g. 서울역(Seoul station)'
            ref={inputElement}
            onKeyDown={onKeyPress}
          />
        </SearchContainer>
        <MyLocation onClick={getCurrentLocation}>MY LOCATION</MyLocation>
      </Nav>
    </>
  );
};

export default Header;
