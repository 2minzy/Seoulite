
## 🔍 Project Overview
대학생 코딩 연합 동아리 멋쟁이 사자처럼 스터디에서 진행한 프로젝트로, <br />
지도 Api를 이용한 서비스를 구현해보자는 취지로 시작 된 스터디모임에서 만든 프로젝트 입니다.<br />
밖에서 핸드폰 데이터가 떨어져가서 급하게 와이파이가 필요할때, **서울시의 와이파이가 설치된 곳의 위치 정보를 검색하고 확인** 할 수 있으며, <br />
자신의 **현재 위치를 검색**하여 **주변의 가까운 와이파이 위치를 확인**합니다.<br />
**카카오 지도 API**와 **서울시 열린데이터 광장 API**를 이용하여 프로젝트를 구현하였습니다.<br />
<br />
>✨ 아래 링크에서 프로젝트 데모 확인이 가능합니다.
[Seoulite Demo](https://seoulite.netlify.app/)

<br />

#### 사용기술
- HTML5 / CSS3
- JavaScript(ES6+)
- React
- Styled-components


#### APIs
-  [카카오 지도 API](https://apis.map.kakao.com/)
- [서울시 열린데이터 광장](https://data.seoul.go.kr/dataList/OA-13061/S/1/datasetView.do)


#### 구현기능사항
- 위치 정보 확인
- 지도 확대/축소
- 지도 검색 
- 현재 위치 검색
- 다크/라이트 모드 지원
- 반응형 웹


<hr />
<br />

### ✨ 첫 랜딩 페이지, 지도 확대 / 축소 기능

![](https://images.velog.io/images/bbio3o/post/63cdd762-5626-4bf8-be90-ba189a554a16/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202021-01-19%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.04.35.gif)
<br />
패치한 api의 위치정보 양이 방대하여 Kakao map api에서 제공하는 MarkerClusterer를 이용하여 위치 마커 정보를 **클러스터화** 하였습니다.<br />
**지도의 확대와 축소가 가능**하며, **오른쪽 상단의 줌 컨트롤러**를 이용하여 확대 축소도 가능하도록 구현하였습니다.<br />

마커 클러스터러 도입을 결심한 이유는 클러스터화 하기 전의 마커 정보는 데이터 량이 많아 이렇게 아래 스크린샷과 같이 어마 무시하게 보이기 때문입니다...💩<br />
[카카오 맵 API 마커 클러스터러 사용하기 링크](https://apis.map.kakao.com/web/sample/basicClusterer/)<br />

![](https://images.velog.io/images/bbio3o/post/608f99cd-3843-46dd-b0e1-fb362f2e7f8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-20%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.48.26.jpg)

<br />

### ✨ 지도 위치검색 기능
![](https://images.velog.io/images/bbio3o/post/da3328fd-39a8-48ee-8fef-6cbaa0c2446a/%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif)

사용자는 위치 키워드를 입력하면 **해당 위치로 지도가 이동, 줌인(zoom-in)** 됩니다.

<br />

### ✨ 사용자 현재 위치 검색
![](https://images.velog.io/images/bbio3o/post/00a5c6d3-ad4d-4320-ac1e-2a9c8fe2fb53/%E1%84%92%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%B1%E1%84%8E%E1%85%B5.gif)
**geolocation**을 이용하여 **사용자의 현재 위치**를 보여주도록 구현하였습니다.

<br />

### ✨ 다크/라이트 모드 지원
![](https://images.velog.io/images/bbio3o/post/e5182bc1-0959-4719-986d-08dfdd66a80e/%E1%84%83%E1%85%A1%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3.gif)

헤더 부분의 **switch를 통해 다크/라이트 모드 변경**이 가능합니다.

<br />

### ✨ 반응형 웹
![](https://images.velog.io/images/bbio3o/post/e6737207-c6a1-4418-aeba-ad2a337bef1d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.28.37.jpg)

데스크탑, 아이패드, 모바일 순으로 반응형 웹을 구현하였습니다.
<br />

