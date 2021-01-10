import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import { ThemeProvider } from 'styled-components';
import theme from './components/theme';

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

  const onUserInputDistrict = value => {
    setDistrict(value);
  };

  const onUserLocation = (lat, lng) => {
    setUserLocation({ lat, lng }); // why object? to use key value rather than index of array
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header onSearch={onUserInputDistrict} onLocation={onUserLocation} />
        <MapContainer district={district} userLocation={userLocation} />
      </ThemeProvider>
    </div>
  );
}

export default App;
