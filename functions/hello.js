const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    console.log(process.env.REACT_APP_PUBLIC_WIFI_API_KEY);

    const result = await axios.get(
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_PUBLIC_WIFI_API_KEY}/json/SebcPublicWifiEng/1/5/`
    );

    console.log(result.data);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
};
