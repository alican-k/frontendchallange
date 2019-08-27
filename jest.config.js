module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(bootstrap-vue)/)'],
  testPathIgnorePatterns: [
    '/build/',
    '/config/',
    '/data/',
    '/dist/',
    '/node_modules/',
    '/test/',
    '/vendor/'
  ],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    },
    NODE_ENV: 'test'
	},
	setupFiles: ["<rootDir>/__mocks__/browserMock.js"]
}
