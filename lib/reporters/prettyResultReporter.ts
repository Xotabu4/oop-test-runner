const PrettyError = require('pretty-error');
import { ResultReporter } from './index';
import { Test } from '../testObject';



export class PrettyResultReporter {
    constructor(protected test: Test) { }

    attach() {
        this.test.reporters.push(this)
    }

    report(result: any) {
        if (!result) return
        var pe = new PrettyError();
        console.log(pe.render(result))
    }
}