export default {
    transform: {}, // no uses Babel ni ts-jest si no es necesario
    testEnvironment: 'node',
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  };
  