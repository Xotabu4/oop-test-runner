const importantData = require('/Users/oleksandrkhotemskyi/Documents/GitHub/Public/oop-test-runner/v3/tests/module.js')

function test() {
    if (testNum == 5) {
        setTimeout(()=> {
            throw new Error('oops')
        }, 5000)
    }
    return { importantData, testNum }
}

module.exports.test = test;