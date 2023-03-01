import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      apiKey: 'aZmoOYPTSUCSdHzGhAZ4dP2SuUQ11DHZ7lwZBzHOb5o=',
    },
  });
};
