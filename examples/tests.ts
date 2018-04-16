import { BasicTest } from "../lib/testObject";

class SuccesfullLogin extends BasicTest {
    name = 'Verifying that we still can login'
    description = 'Verifying that we still can login'

    test() {
        console.log('Successful login!')
    }
}

class TestThatWillFail extends BasicTest {
    name = 'This test supposed to fail'
    description = 'Verifying that we still can fail'

    test() {
        throw new Error('Some horrible error!')
    }
}


export let tests = [new SuccesfullLogin(), new TestThatWillFail()]