const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const result = await axios.get(
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_PUBLIC_WIFI_API_KEY}/json/SebcPublicWifiEng/1/5/`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result.data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
};
