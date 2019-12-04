module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/__tests__/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  testRegex: '(/__tests__/.*|(.|/)(test|spec)).(jsx?|tsx?)$',
  testEnvironment: 'node',
  // 编译
  transform: {
    '^.+.tsx?$': 'ts-jest'
  }
}
