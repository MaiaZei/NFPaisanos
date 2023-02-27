import Api from './Api';

export default {
  async getEthPrice() {
    console.log('estoy en getEthPrice service');
    var response = await Api().get('/nfpaisanos/eth-price', {
      proxy: {
        host: 'http://challenges.us-east-1.elasticbeanstalk.com',
        port: 80,
      },
    });
    console.log(response, 'response estoy en getEthPrice service');
    return response.data;
  },
  async getPopular() {
    var response = await Api().get('/nfpaisanos/popular');
    return response.data;
  },
  async getAunctions() {
    console.log('estoy en getAunctions service');
    var response = await Api().get('/nfpaisanos/aunctions');
    console.log(response, 'response estoy en getAunctions service');
    return response.data;
  },
};
