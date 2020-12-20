const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
