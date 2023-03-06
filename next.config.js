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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};
