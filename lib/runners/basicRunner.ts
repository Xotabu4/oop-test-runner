import { BasicTest } from '../testObject';
import { BasicReporter, Reporter } from '../reporters';
import { Runner } from './runner';

/**
 * Basic sequenced runner. Can handle your async tests, but cannot run in parralel
 */
export class BasicRunner extends Runner {
    protected runnerEvents: string[] = [
        'onStart',
        'onTestStart',
        'onTestEnd',
        // 'onTestFail', onTestEnd will receive error if any as third param
        'onEnd']

    protected reporters = []

    constructor(protected tests: BasicTest[]) {
        super(tests)
    }

    async subscribeReporter(reporter: Reporter) {

        // Subscribe to only events that we support
        for (const runnerEvent of this.runnerEvents) {
            console.log(runnerEvent)
            if (typeof reporter[runnerEvent] === 'function') {
                this.on(runnerEvent, reporter[runnerEvent])
            }
        }
        this.reporters.push(reporter)
    }

    async run() {
        for (let test of this.tests) {
            test.conditions.before.map(condition => condition.apply())
            let result = await this.result(test)
            test.conditions.after.map(condition => condition.apply())
        }
    }
}
