import axios from 'axios';

const MAX_ROWS = 1000; // max request data per request

export const fetchLocations = async (start = 1, end = MAX_ROWS) => {
  const url = `https://seoulite.netlify.app/.netlify/wifi`;
  const response = await axios.get(url);
  const locations = response.data;

  console.log(locations);

  return locations;
};
