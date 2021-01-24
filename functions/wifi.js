const axios = require('axios');

exports.handler = async (event, context) => {
  const MAX_ROWS = 1000; // max request data per request

  const fetchLocations = async (start = 1, end = MAX_ROWS) => {
    const url = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_PUBLIC_WIFI_API_KEY}/json/SebcPublicWifiEng/${start}/${end}/`;
    const response = await axios.get(url);
    const locations = response.data.SebcPublicWifiEng.row;
    const totalCount = response.data.SebcPublicWifiEng.list_total_count;

    if (totalCount > end) {
      const newStart = end + 1;
      const newEnd = Math.min(end + MAX_ROWS, totalCount);
      return (await fetchLocations(newStart, newEnd)).concat(locations);
    } else {
      return locations;
    }
  };

  try {
    const locations = await fetchLocations();

    return {
      statusCode: 200,
      body: JSON.stringify(locations),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
};
