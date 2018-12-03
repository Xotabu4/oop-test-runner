import { Test } from '../testObject';
import { EventEmitter } from 'events';


export abstract class Runner extends EventEmitter {
    constructor(protected tests: Test[]) {
        super()
    }

    abstract run();

    /**
     * Wrapper to get test error as object (if any)
     * @param test 
     */
    async result(test: Test) {
        try {
            return await test.test()
        } catch (error) {
            return error
        }
    }

    abstract subscribeReporter(reporter)
}


