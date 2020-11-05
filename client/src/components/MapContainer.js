import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { API_URL } from '../Config'
const { kakao } = window;

export default function Map({ district }) {
  const [wifiLocation, setWifiLocation] = useState([]);
  const mapElement = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL)
        const locations = response.data.SebcPublicWifiEng.row
        // handle success
        console.log(locations);

        if(district === '') {
          setWifiLocation(locations);
        } else {
          setWifiLocation(locations.filter(location => location.H_ENG_GU === district));
        }
      } catch(error) {
        // handle error
        console.log(error);
      }
    }
  fetchData();
    // mapscript();
  }, [district]);

  useEffect(() => {
    const initMap = () => {
      let options = {
        center: new kakao.maps.LatLng(37.5730, 126.9794),
        level: 8,
      };
      //mapƒ
      const map = new kakao.maps.Map(mapElement.current, options);
  
      wifiLocation.forEach((el) => {
        // 마커를 생성합니다
          new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.WGS84_Y, el.WGS84_X),
          //마커에 hover시 나타날 title
          title: el.NAME_ENG,
        });
      });
    }
    initMap();
  }, [wifiLocation]);

  return <div ref={mapElement} style={{ width: "100vw", height: "100vh" }}></div>;

}
