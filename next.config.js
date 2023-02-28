module.exports = {
  async rewrites() {
    return [
      {
        source: '/nfpaisanos/aunctions',
        destination:
          'http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/aunctions',
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
