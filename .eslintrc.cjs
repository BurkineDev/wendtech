module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', 'dist-ssr', 'dist-single', 'node_modules'],
  rules: {
    // Projet en JavaScript sans PropTypes : les props ne sont pas typées.
    'react/prop-types': 'off',
    // Les apostrophes du texte français sont valides en JSX.
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }]
  },
  overrides: [
    {
      // Fichiers de configuration et scripts de build exécutés par Node.
      files: ['*.config.js', '*.cjs', 'scripts/**'],
      env: { node: true }
    }
  ]
}
