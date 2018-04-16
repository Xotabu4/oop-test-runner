import { Test } from '../testObject';


export abstract class Runner {
    reporters

    constructor(protected tests: Test[]) { }

    abstract run();

    result(test: Test) {
        try {
            return test.test()
        } catch (error) {
            return error
        }
    }
}


