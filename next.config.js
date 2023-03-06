module.exports = {
  async rewrites() {
    return [
      {
        source: '/nfpaisanos/:path',
        destination:
          'http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/:path',
      },
    ];
  },
  images: {
    domanins: ['http://challenges.us-east-1.elasticbeanstalk.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
};
