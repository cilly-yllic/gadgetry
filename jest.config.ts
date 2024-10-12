import type { Config } from 'jest'

const config: Config = {
  // preset: 'ts-jest',
  preset: 'ts-jest/presets/default-esm', // (node20) SyntaxError: Unexpected token 'export'
  verbose: true,
  silent: false,
  roots: ['<rootDir>/__tests__', '<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.spec.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  globals: {
    config: './tsconfig.spec.json',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['/dev-utils/*.js'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '~internal/(.*)\\.js': '<rootDir>/src/_internal/$1',
    '~core/(.*)\\.js': '<rootDir>/src/_core/$1',
  },
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.config.cjs' }],
    // '^.+\\.m?[t]sx?$': [
    //   'ts-jest',
    //   {
    //     // isolatedModules: true, // TS5110: Option 'module' must be set to 'NodeNext' when option 'moduleResolution' is set to 'NodeNext'.
    //     useESM: true,
    //     tsconfig: 'tsconfig.spec.json',
    //   },
    // ],
  },
}

export default config
