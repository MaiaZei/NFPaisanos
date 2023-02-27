module.exports = {
  async rewrites() {
    return [
      {
        source: '/home',
        destination:
          'http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/eth-price',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
};
