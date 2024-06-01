const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      stream: false,
      constants: false
    };
    return config;
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['buffer.com', 'images.ctfassets.net']
  }
};
