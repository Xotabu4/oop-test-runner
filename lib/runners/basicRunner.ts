import { BasicTest } from '../testObject';
import { BasicReporter, Reporter } from '../reporters';
import { Runner } from './runner';


/**
 * Basic sequenced runner. Can handle your async tests, but cannot run in parralel
 */
export class BasicRunner extends Runner {

    constructor(protected tests: BasicTest[]) {
        super(tests)
    }
    async addReporter(reporter: new () => Reporter) {
        this.tests
            .map(test => new reporter().attachTo(test));
    }

    async run() {
        for (let test of this.tests) {
            test.conditions.before.map(condition => condition.apply())
            let result = await this.result(test)
            test.reporters.map(reporter => reporter.report(result))
            test.conditions.after.map(condition => condition.apply())
        }
    }
}
