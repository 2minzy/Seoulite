import axios from 'axios';

export const fetchLocations = async () => {
  const url = `https://seoulite.netlify.app/.netlify/functions/wifi`;
  const response = await axios.get(url);
  const locations = response.data;

  console.log(locations);

  return locations;
};
