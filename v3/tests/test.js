const importantData = require('/Users/oleksandrkhotemskyi/Documents/GitHub/Public/oop-test-runner/v3/tests/module.js')

function test() {
    if (testNum == 5) {
        throw new Error('oops')
    }
    return { importantData, testNum }
}

module.exports.test = test;