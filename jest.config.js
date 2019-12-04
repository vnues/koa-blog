module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/__tests__/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
