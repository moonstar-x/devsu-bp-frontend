module.exports = {
  roots: ['<rootDir>./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: [
    './src/setupTests.ts'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg(?:\\?react)?$': '<rootDir>/__mocks__/svg.ts',
    '^\\$(.*)$': '<rootDir>/src/$1'
  }
};
