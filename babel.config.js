module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@screen': './src/screen',
          '@store': './src/store',
          '@navigation': './src/navigation',
          'react-native': './node_modules/react-native',
          react: './node_modules/react',
        },
      },
    ],
    'react-native-reanimated/plugin',


  ],
};
