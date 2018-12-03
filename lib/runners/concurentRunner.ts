import { BasicRunner } from './basicRunner';


/**
 * Simple concurrent runner. Can handle your async tests, and run each test in paralel
 * TODO: implement concurrency limit
 */
export class ConcurrentRunner extends BasicRunner {
    async run() {
        this.emit('onStart', this.tests)
        await Promise.all(this.tests.map(async (test, testIndx) => {
            this.emit('onTestStart', test, testIndx)
            test.conditions.before.map(condition => condition.apply())
            const result = await this.result(test)
            test.conditions.after.map(condition => condition.apply())
            this.emit('onTestEnd', test, testIndx, result)
        }))
        this.emit('onEnd', this.tests)
    }
}
