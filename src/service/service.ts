import Api from './Api';

export default {
  async getEthPrice() {
    var response = await Api().get('/nfpaisanos/eth-price');
    return response.data.usd;
  },
  async getPopular() {
    var response = await Api().get('/nfpaisanos/popular');
    return response.data;
  },
  async getAunctions() {
    var response = await Api().get('/nfpaisanos/aunctions');
    return response.data;
  },
};
