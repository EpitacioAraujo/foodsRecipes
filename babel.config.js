module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@colors': './src/assets/styles/colors.js',
          '@pages': './src/pages',
          '@core': './src/components/Core',
          '@images': './src/assets/images',
        },
      },
    ],
  ],
};
