import { Test, BasicTest } from '../testObject';
import { BasicLogger } from '../loggers';


export class Runner {

    constructor(protected tests: Test[]) { }

    run() {
        this.tests
            .map(test => new BasicLogger().attach(test as BasicTest))
            .map(test => {
                test.conditions.before.map(condition => condition.apply())
                test.test()
                test.conditions.after.map(condition => condition.apply())
            })
    }

}


