export default {
    projects: [
      {
        displayName: 'node',
        testEnvironment: 'node', // Node-specific
        setupFiles: ['./jest.setup.node.js'],
        testMatch: ['**/*.node.test.js'], // Run Node-based tests
      },
      {
        displayName: 'jsdom',
        testEnvironment: 'jsdom', // JSdom-based
        setupFiles: ['./jest.setup.jsdom.js'],
        testMatch: ['**/*.jsdom.test.js'], // Run JSdom-based tests
      },
    ],
  };