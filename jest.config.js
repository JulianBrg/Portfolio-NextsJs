module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/app/**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};