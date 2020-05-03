module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@assets': './assets',
        },
      },
    ],
  ],
};
