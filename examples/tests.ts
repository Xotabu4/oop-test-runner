import { BasicTest } from "../lib/testObject";

class SuccesfullLogin extends BasicTest {
    name = 'Verifying that we still can login'
    description = 'Verifying that we still can login'

    async test() {
        console.log('Successful login!')
    }
}

class TestThatWillFail extends BasicTest {
    name = 'This test supposed to fail'
    description = 'Verifying that we still can fail'

    async test() {
        throw new Error('Some horrible error!')
    }
}

class SomeAsyncTest extends BasicTest {
    name = 'Async test that returns promise'
    description = 'Async test!'

    async test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('100 ms passed ...')
                resolve()
            }, 100)
        })
    }
}

export let tests = [
    new SuccesfullLogin(),
    new TestThatWillFail(),
    //TODO: Messed output
    new SomeAsyncTest()
]