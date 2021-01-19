import React, { useRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Switch from './Switch';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBackground};

  font-family: 'Lato', sans-serif;
  padding: 0 60px;
  height: 100px;

  @media ${({ theme }) => theme.device.mobile} {
    height: 120px;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  } ;
`;

const NavTool = styled.div`
  display: flex;
  align-items: center;
  margin-left: -180px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-left: -12px;
    p {
      display: none;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 0;
    p {
      display: none;
    }
  } ;
`;

const Logo = styled.a`
  font-family: 'Suez One', serif;
  color: ${({ theme }) => theme.colors.color};
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
  color: ${({ theme }) => theme.colors.color};
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${({ theme }) => theme.colors.color};
  width: 170px;
  height: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    border-width: 0 0 1px;
  } ;
`;

const SearchBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.color};
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

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.switchColor};
    font-size: 0.8rem;
  }
`;

const MyLocation = styled.button`
  background-color: ${({ theme }) => theme.colors.btnBackground};
  color: ${({ theme }) => theme.colors.btnFontColor};
  font-weight: 900;
  border-radius: 20px;
  width: 180px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btnFontColor};
    color: #a8dba8;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 140px;
  } ;
`;

const Header = ({ onSearch, onLocation, onThemeColor }) => {
  const theme = useContext(ThemeContext);
  const inputElement = useRef(null);

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

  const getCurrentLocation = () => {
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

  const toggleThemeColor = () => {
    if (theme.name === 'light') {
      onThemeColor('dark');
    } else {
      onThemeColor('light');
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
        <NavTool>
          <SwitchContainer>
            {theme.name === 'dark' ? (
              <p>Switch to Light Mode</p>
            ) : (
              <p>Switch to Dark Mode</p>
            )}
            <Switch
              isOn={theme.name === 'light'}
              onColor='#333'
              handleToggle={toggleThemeColor}
            ></Switch>
          </SwitchContainer>

          <MyLocation onClick={getCurrentLocation}>MY LOCATION</MyLocation>
        </NavTool>
      </Nav>
    </>
  );
};

export default Header;
