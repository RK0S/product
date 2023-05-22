import path from "path";

export default {
    // Настройка Jest на ts-jest

    // clearMocks: true,
    // coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    // // coverageProvider: 'v8', Для TS без Babel
    // moduleDirectories: ['node_modules'],

    // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    // rootDir: '../../',
    // testEnvironment: 'jsdom',
    // testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    // // preset: "ts-jest" Для TS без Babel

    // Настройка Jest на Babel

    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    moduleNameMapper: {
        "\\.s?css$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx")
    },
    setupFilesAfterEnv: [
        "<rootDir>/config/jest/setupTests.ts"
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    globals: {
        '__IS_DEV__': true
    }
};
