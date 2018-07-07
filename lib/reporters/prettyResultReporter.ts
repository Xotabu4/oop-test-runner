const PrettyError = require('pretty-error');
import { ResultReporter } from './index';
import { Test, BasicTest } from '../testObject';



export class PrettyResultReporter {
    constructor(protected test: BasicTest) { }

    attach() {
        this.test.reporters.push(this)
    }

    report(result: any) {
        // TODO: Potentially test might return result even when successfully passed. Consider to implement in future.
        // Currently assuming if no result - test passed
        if (!result) return
        var pe = new PrettyError();
        console.log(
`
${this.test.name}: 
${this.test.description} 
 is failed!
`)

        console.log(pe.render(result))
    }
}