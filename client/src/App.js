import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MapContainer from './components/MapContainer';

function App() {
  const [district, setDistrict] = useState('');
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const onUserInputDistrict = value => {
    setDistrict(value);
    console.log(value);
  };

  const onUserLocation = (lat, lng) => {
    setUserLocation({ lat, lng }); // why object? to use key value rather than index of array
  };

  return (
    <div>
      <Header onSearch={onUserInputDistrict} onLocation={onUserLocation} />
      <MapContainer district={district} userLocation={userLocation} />
    </div>
  );
}

export default App;
