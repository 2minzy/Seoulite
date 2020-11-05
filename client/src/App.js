import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import MapContainer from './components/MapContainer'

function App() {
  const [district, setDistrict] = useState('');

  const onUserInputDistrict = (value) => {
    setDistrict(value);
    console.log(value);
  }

  return (
    <div>
      <Header onSearch={onUserInputDistrict}/>
      <MapContainer district={district} />
    </div>
  );
}

export default App;
