module.exports = {
    testEnvironment: 'jsdom', //document not defined when running render function inside test
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', //for parsing tsx files
        '^.+\\.(js|jsx)$': 'babel-jest', //for parsing js files
    },
};
