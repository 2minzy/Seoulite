
## 🔍 Project Overview
대학생 코딩 연합 동아리 멋쟁이 사자처럼에서 진행한 프로젝트로, <br />
지도 Api를 이용한 서비스를 구현해보자는 취지로 시작 된 스터디모임에서 만든 프로젝트 입니다.<br />
밖에서 핸드폰 데이터가 떨어져가서 급하게 와이파이가 필요할때, **서울시의 와이파이가 설치된 곳의 위치 정보를 검색하고 확인** 할 수 있으며, <br />
자신의 **현재 위치를 검색**하여 **주변의 가까운 와이파이 위치를 확인**합니다.<br />
**카카오 지도 API**와 **서울시 열린데이터 광장 API**를 이용하여 프로젝트를 구현하였습니다.
<br />
<br />
>✨ 아래 링크에서 프로젝트 데모 확인이 가능합니다.<br />
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
- 현재 위치 검색(**Geolocation**)
- 다크/라이트 모드 지원
- 반응형 웹


<hr />
<br />

### ✨ 첫 랜딩 페이지, 지도 확대 / 축소 기능

![](https://images.velog.io/images/bbio3o/post/63cdd762-5626-4bf8-be90-ba189a554a16/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202021-01-19%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.04.35.gif)
<br />
패치한 api의 위치정보 양이 방대하여 Kakao map api에서 제공하는 MarkerClusterer를 이용하여 
<br />
위치 마커 정보를 **클러스터화** 하였습니다.
<br />
**지도의 확대와 축소가 가능**하며, **오른쪽 상단의 줌 컨트롤러**를 이용하여 확대 축소도 가능하도록 구현하였습니다.
<br />

<br />

### ✨ 지도 위치검색 기능
![](https://images.velog.io/images/bbio3o/post/da3328fd-39a8-48ee-8fef-6cbaa0c2446a/%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif)
<br />
사용자는 위치 키워드를 입력하면 **해당 위치로 지도가 이동, 줌인(zoom-in)** 됩니다.
<br />

<br />

### ✨ 사용자 현재 위치 검색
![](https://images.velog.io/images/bbio3o/post/00a5c6d3-ad4d-4320-ac1e-2a9c8fe2fb53/%E1%84%92%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%B1%E1%84%8E%E1%85%B5.gif)
<br />
**geolocation**을 이용하여 **사용자의 현재 위치**를 보여주도록 구현하였습니다.
<br />

<br />

### ✨ 다크/라이트 모드 지원
![](https://images.velog.io/images/bbio3o/post/e5182bc1-0959-4719-986d-08dfdd66a80e/%E1%84%83%E1%85%A1%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3.gif)
<br />
헤더 부분의 **switch를 통해 다크/라이트 모드 변경**이 가능합니다.
<br />

<br />

### ✨ 반응형 웹
![](https://images.velog.io/images/bbio3o/post/e6737207-c6a1-4418-aeba-ad2a337bef1d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.28.37.jpg)
<br />
데스크탑, 아이패드, 모바일 순으로 반응형 웹을 구현하였습니다.
<br />

<hr />
<br />

## 🌿 리뷰
리액트 컴포넌트 사이의 데이터교환을 이해하는데에 많은 도움이 되었습니다.<br />
부모에서 자식으로 데이터를 넘겨주는 것은 props를 통해 쉽게 전달 가능하지만, 반대는 조금 더 복잡합니다.<br />
자식 컴포넌트에서 부모 컴포넌트로 데이터를 넘겨주려면 callback function을 이용할 수 있습니다.<br />
형제자매 사이의(Between Siblings) 데이터 교환은 더욱 복잡했습니다.<br />
이는 Redux 라이브러리 또는 리액트의 context API를 이용하여 해결 가능합니다.<br />
또는 props와 callback function 두 가지 데이터 공유 방법을 결합하여 해결 할 수 있으나, 컴포넌트 사이의 관계가 매우 복잡하다면 이는 구현하기 굉장히 까다로울 수 있습니다.<br />
Seoulite는 간단한 지도 서비스이기 때문에, Redux를 도입하는 것은 너무 무거울 수 있다 판단을 하여,컴포넌트 간의 데이터 교환에 대한 기본적인 이해를 위해 세번째 방법을 택하여 적용시켰습니다.<br />
이번 프로젝트를 통해 지도 API 와 공공 데이터 API의 사용에 대해 이해할 수 있었습니다.<br />
서울시 열린데이터 광장이 한번의 요청이 최대1000개 까지만 허용(사용하려는 data의 개수는 1993개였음)되어서 totalCount가 end 값을 넘으면 그 이후의 데이터를 받아 올 수 있도록 <br />
recursive function 재귀함수를 통해 전체 locations 값을 구하였습니다. <br />
geolocation을 통해 사용자의 현재 위치를 받아오는 부분도 흥미로웠습니다. geolocation API는 HTTPS 환경에서만 지원되어서 배포 시 HTTPS 지원이 되는 netlify를 이용하였습니다.

