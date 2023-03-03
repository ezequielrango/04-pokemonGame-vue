module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
      'js',
      'vue'
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': 'vue-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
  }
  