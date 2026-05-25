import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-sync-scripts': 'off',
      '@next/next/no-css-tags': 'off'
    }
  }),
];

export default eslintConfig;
