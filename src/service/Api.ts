import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://nf-paisanos-iej5.vercel.app',
    headers: {
      apiKey: 'aZmoOYPTSUCSdHzGhAZ4dP2SuUQ11DHZ7lwZBzHOb5o=',
    },
  });
};
