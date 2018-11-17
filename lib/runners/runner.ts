import { Test } from '../testObject';


export abstract class Runner {
    reporters

    constructor(protected tests: Test[]) { }

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
}


