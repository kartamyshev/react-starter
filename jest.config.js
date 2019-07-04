module.exports = {
  setupFiles: ['<rootDir>/test-shim.js', '<rootDir>/test-setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/test-preprocessor.js'
  },
  testMatch: ['**/__tests__/*.(ts|tsx|js)'],
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@css/(.*)$': '<rootDir>/src/css/$1',
    '^@stores/(.*)$': '<rootDir>/src/stores/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  }
};
