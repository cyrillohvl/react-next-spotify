module.exports = {
  presets: ['next/babel'],
  plugins: [
    'babel-plugin-inline-react-svg',
    ['styled-components', { ssr: true }],
  ],
};
