import { Test } from '../testObject';


export abstract class Runner {
    reporters

    constructor(protected tests: Test[]) { }

    abstract run();

    async result(test: Test) {
        try {
            return await test.test()
        } catch (error) {
            return error
        }
    }
}


