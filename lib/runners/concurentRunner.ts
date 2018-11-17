import { BasicTest } from '../testObject';
import { Reporter } from '../reporters';
import { BasicRunner } from './basicRunner';


/**
 * Simple concurrent runner. Can handle your async tests, and run each test in paralel
 * TODO: implement concurrency limit
 */
export class ConcurrentRunner extends BasicRunner {
    async run() {
        await Promise.all(this.tests.map(async (test, indx) => {
            test.conditions.before.map(condition => condition.apply())
            let result = await this.result(test)
            test.reporters.map(reporter => reporter.report(result))
            test.conditions.after.map(condition => condition.apply())
        }))
    }
}
