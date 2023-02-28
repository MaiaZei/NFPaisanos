import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      KEY: 'apiKey',
      VALUE: 'aZmoOYPTSUCSdHzGhAZ4dP2SuUQ11DHZ7lwZBzHOb5o=',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods':
        'GET, PUT, POST, DELETE, OPTIONS',
    },
  });
};
