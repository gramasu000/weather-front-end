module.exports = {
  /* The source files are meant to be run in a browser and use es6 */
  'env': {
    'browser': true,
    'es6': true,
  },
  /** Use eslint plugins 
   *  1. eslint-plugin-react (Since it is a React project)
   *  2. eslint-config-google (Since we follow Google Coding Style)
   */
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  /* Use babel-eslint to parse es6 javascript instead of the default espree
   * babel-eslint can handle some modern javascript syntax such as "static property = { }"
   * which espree cannot
   */
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  'rules': {
  },
  /* Set eslint to autodetect the version of react used in this project
   * Solves a warning that eslint does not know what react version you are using.
  */
  'settings': {
    'react': {
      'version':'detect'
    }
  }
};
