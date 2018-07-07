import { BasicTest } from '../testObject';
import { BasicReporter } from '../reporters';
import { Runner } from './runner';


/**
 * Basic sequenced runner. Can handle your async tests, but cannot run in parralel
 */
export class BasicRunner extends Runner {

    constructor(protected tests: BasicTest[]) {
        super(tests)
    }

    async run() {
        this.tests
            .map(test => new BasicReporter().attachTo(test));
        for (let test of this.tests) {
            test.conditions.before.map(condition => condition.apply())
            let result = await this.result(test)
            test.reporters.map(reporter => reporter.report(result))
            test.conditions.after.map(condition => condition.apply())
        }
    }
}
