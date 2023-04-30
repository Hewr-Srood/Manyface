module.exports = {
  root: true,
  // single quotes jsx double quotes

  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react-native/no-inline-styles': 'off',
    'react/react-in-jsx-scope': 'off',
  },

  extends: '@react-native-community',
};
