import { BasicTest } from '../testObject';
import { BasicReporter } from '../reporters';
import { Runner } from './runner';


export class BasicRunner extends Runner {

    constructor(protected tests: BasicTest[]) {
        super(tests)
    }

    run() {
        return this.tests
            .map(test => new BasicReporter().attachTo(test))
            .map(test => {
                test.conditions.before.map(condition => condition.apply())
                let result = this.result(test)
                test.reporters.map(reporter => reporter.report(result))
                test.conditions.after.map(condition => condition.apply())
            })
    }

}


