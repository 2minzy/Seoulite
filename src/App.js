import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import { darkTheme, lightTheme } from './components/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
  }

  a {
  text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    text-align: center;
  }
`;

function App() {
  const [district, setDistrict] = useState('');
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const [themeColor, setThemeColor] = useState('dark');

  const onUserInputDistrict = value => {
    setDistrict(value);
  };

  const onThemeColorChange = value => {
    setThemeColor(value);
  };

  const onUserLocation = (lat, lng) => {
    setUserLocation({ lat, lng }); // why object? to use key value rather than index of array
  };

  return (
    <div>
      <ThemeProvider theme={themeColor === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header
          onSearch={onUserInputDistrict}
          onLocation={onUserLocation}
          onThemeColor={onThemeColorChange}
        />
        <MapContainer district={district} userLocation={userLocation} />
      </ThemeProvider>
    </div>
  );
}

export default App;
