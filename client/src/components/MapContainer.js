import React, { useState, useEffect, useRef } from 'react';
import { fetchLocations } from '../services/seoulWifiAPI';
const { kakao } = window;

export default function Map({ district, userLocation }) {
  const [wifiLocation, setWifiLocation] = useState([]);
  const [map, setMap] = useState(null);
  const mapElement = useRef(null);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.573, 126.9794),
      level: 8,
    };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapElement.current, options);

    // Create zoomControl
    const zoomControl = new kakao.maps.ZoomControl();
    // 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다.
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    setMap(map);
  }, []);

  useEffect(() => {
    const initMap = () => {
      wifiLocation.forEach(el => {
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

      // 장소 검색 객체를 생성합니다
      const ps = new kakao.maps.services.Places();

      const placesSearchCB = (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          for (let i = 0; i < data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          map.setBounds(bounds);
        }
      };
      // 키워드로 장소를 검색합니다
      if (district !== '') {
        ps.keywordSearch(district, placesSearchCB);
      }
    };
    if (map !== null) {
      initMap();
    }
  }, [wifiLocation, district, map]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await fetchLocations();
        // handle success
        setWifiLocation(locations);
      } catch (error) {
        // handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (map !== null) {
      const { lat, lng } = userLocation;
      if (lat !== 0 && lng !== 0) {
        const locPosition = new kakao.maps.LatLng(lat, lng);
        const message =
          '<div style="padding:5px; width: 180px;"><b>Your current location!</b></div>';
        map.setLevel(4);
        displayMarker(locPosition, message);
        function displayMarker(locPosition, message) {
          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
          });

          const iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

          // 인포윈도우를 생성합니다
          const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });

          // 인포윈도우를 마커위에 표시합니다
          infowindow.open(map, marker);

          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
        }
      }
    }
  }, [userLocation, map]);

  return (
    <div ref={mapElement} style={{ width: '100vw', height: '100vh' }}></div>
  );
}
