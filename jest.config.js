// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    coverageThreshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: -1
        },
    },
    collectCoverageFrom: [
        "./server/src/**",
        // "./src/**" // For frontend coverage!
    ],
    projects: [
        {
            displayName: "unit",
            verbose: true,
            runner: "jest-runner",
            testMatch: [
                "./**/test/node/unit/**",
            ],
            // collectCoverage: true,
            coveragePathIgnorePatterns: [
                "./server/test/resources",
                "./server/src/server.js",
                "./server/src/routes",
                "./src/**"
            ]
        },
        {
            displayName: "blackbox",
            verbose: true,
            runner: "jest-runner",
            testMatch: [
                "./**/test/node/blackbox/**"
            ],
            collectCoverage: true,
            coveragePathIgnorePatterns: [
                "./server/test/resources",
                "./server/src/server.js",
                "./server/src/services",
                "./src/**"
            ]
        },
        {
            displayName: "summary",
            runner: "jest-runner",
            testMatch: [
                "./**/test/node/unit/**",
                "./**/test/node/blackbox/**"
            ],
            // collectCoverage: true,
            collectCoverageFrom: [
                "./server/src/**",
            ], 
            coveragePathIgnorePatterns: [
                "./server/test/resources",
                "./server/src/server.js",
            ],
            coverageReporters: ["clover", "json", "lcov", "text", "html"]
        },
    ]
};

module.exports = config;