import { Test } from '../testObject';
import { Reporter } from '../reporters';
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

    constructor(protected tests: Test[]) {
        super(tests)
    }

    async subscribeReporter(reporter: Reporter) {
        // Subscribe to only events that we support
        for (const runnerEvent of this.runnerEvents) {
            if (typeof reporter[runnerEvent] === 'function') {
                this.on(runnerEvent, reporter[runnerEvent])
            }
        }
        this.reporters.push(reporter)
    }

    async run() {
        this.emit('onStart', this.tests)
        let testIndx = 0
        for (let test of this.tests) {
            this.emit('onTestStart', test, testIndx)
            test.conditions.before.map(condition => condition.apply())
            let result = await this.result(test)
            test.conditions.after.map(condition => condition.apply())
            this.emit('onTestEnd', test, testIndx, result)
            testIndx++
        }
        this.emit('onEnd', this.tests)
    }
}
