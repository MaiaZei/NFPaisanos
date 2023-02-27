import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://challenges.us-east-1.elasticbeanstalk.com',
    headers: {
      KEY: 'apiKey',
      VALUE: 'UJc54fYJlsHJ8w71AuPiouTLW1m3TxmylFZeXdSvuAI=',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods':
        'GET, PUT, POST, DELETE, OPTIONS',
    },
  });
};
