import { BasicRunner } from './basicRunner';
import * as microjob from 'microjob'

/**
 * Simple threads runner. Uses nodejs worker threads to run each test in own thread
 * 
 * TODO: implement concurrency limit
 */
export class ThreadsRunner extends BasicRunner {
    async run() {
        const { isMainThread } = require('worker_threads');

        if (isMainThread) {
            this.emit('onStart', this.tests)
            process.setMaxListeners(0);
            await microjob.start({maxWorkers: this.tests.length});
    
            const results = this.tests.map(async (test, testIndx) => {
                this.emit('onTestStart', test, testIndx)
                test.conditions.before.map(condition => condition.apply())
                //console.time('JOB_FINISHED'+ testIndx)
                const result = await microjob.job(async DATA => {
                    //console.log(DATA)
                    global['TEST_DATA'] = DATA;
                    process.env['TS_NODE_FILES'] = true as any
                    require('ts-node').register()
                    //console.time('TEST_WORKER_FINISHED_'+ DATA.runnerConfig.testNumber)
                    const { runFinished } = require(DATA.runnerConfig.processArgv[1])
                    await runFinished
                    //console.timeEnd('TEST_WORKER_FINISHED_'+ DATA.runnerConfig.testNumber)
                }, {
                    data: {
                        runnerConfig: {
                            processArgv: process.argv,
                            testNumber: testIndx
                        }
                    }
                })
                //console.timeEnd('JOB_FINISHED'+ testIndx)
                // const result = await this.result(test)
                test.conditions.after.map(condition => condition.apply())
                this.emit('onTestEnd', test, testIndx, result)
            })
            await Promise.all(results);
            this.emit('onEnd', this.tests)
            await microjob.stop();
        } else {
            const test = this.tests[global['TEST_DATA']]
            const result = await this.result(test)
        }

    }
}
