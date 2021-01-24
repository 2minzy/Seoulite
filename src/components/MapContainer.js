import React, { useState, useEffect, useRef } from 'react';
import { fetchLocations } from '../services/seoulWifiAPI';
const { kakao } = window;

export default function Map({ district, userLocation }) {
  const [wifiLocation, setWifiLocation] = useState([]);
  const [map, setMap] = useState(null);
  const mapElement = useRef(null);

  // Initialize map
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.5326, 126.99),
      level: 9,
    };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapElement.current, options);

    // Create zoomControl
    const zoomControl = new kakao.maps.ZoomControl();
    // 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다.
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    setMap(map);
  }, []);

  // Fetch API location data
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

  // Create clusterer and set markers
  useEffect(() => {
    if (map !== null) {
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 6, // 클러스터 할 최소 지도 레벨
      });
      const markers = wifiLocation.map(el => {
        // 마커를 생성합니다
        return new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.WGS84_Y, el.WGS84_X),
          //마커에 hover시 나타날 title
          title: el.NAME_ENG,
        });
      });

      clusterer.addMarkers(markers);
    }
  }, [wifiLocation, map]);

  // Search location with keyword
  useEffect(() => {
    if (map !== null) {
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
    }
  }, [wifiLocation, district, map]);

  // Get user current location
  useEffect(() => {
    if (map !== null) {
      const { lat, lng } = userLocation;
      if (lat !== 0 && lng !== 0) {
        const locPosition = new kakao.maps.LatLng(lat, lng);
        const message =
          '<div style="padding:5px; width: 150px; color: #3b8686;"><b>Hi mate! I\'m here!</b></div>';
        map.setLevel(4);
        displayMarker(locPosition, message);

        function displayMarker(locPosition, message) {
          const imageSrc =
            'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
            image: markerImage, // 마커 이미지
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
