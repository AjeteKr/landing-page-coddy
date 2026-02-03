const path = require('path');

module.exports = function override(config, env) {
  // Add path aliases
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@locales': path.resolve(__dirname, 'src/locales'),
  };
  
  return config;
};
