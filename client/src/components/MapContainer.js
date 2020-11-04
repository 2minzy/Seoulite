import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { API_URL } from '../Config'
const { kakao } = window;

export default function Map() {
  const [wifi, setWifi] = useState([]);
  const mapElement = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL)
        // handle success
        // console.log(response.data.SebcPublicWifiEng);
        setWifi(response.data.SebcPublicWifiEng.row);
      } catch(error) {
        // handle error
        console.log(error);
      }
    }
  fetchData();
    // mapscript();
  }, []);

  useEffect(() => {
    const initMap = () => {
      let options = {
        center: new kakao.maps.LatLng(37.5730, 126.9794),
        level: 8,
      };
      //mapƒ
      const map = new kakao.maps.Map(mapElement.current, options);
  
      wifi.forEach((el) => {
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
  }, [wifi]);

  // const mapscript = () => {
  //   let container = document.getElementById("map");
  //   let options = {
  //     center: new kakao.maps.LatLng(37.5730, 126.9794),
  //     level: 8,
  //   };

  //   //map
  //   const map = new kakao.maps.Map(container, options);
    
  //   response.data.SearchPublicToiletPOIService.row.forEach((el) => {
  //     // 마커를 생성합니다
  //     new kakao.maps.Marker({
  //       //마커가 표시 될 지도
  //       map: map,
  //       //마커가 표시 될 위치
  //       position: new kakao.maps.LatLng(el.Y_WGS84, el.X_WGS84),
  //       //마커에 hover시 나타날 title
  //       title: el.FNAME,
  //     });
  //   });
  // };

  return <div ref={mapElement} style={{ width: "100vw", height: "100vh" }}></div>;
  // return <div>{toilets.map(el => <div>{el.FNAME}</div>)}</div>
}
