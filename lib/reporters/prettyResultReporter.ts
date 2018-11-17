const PrettyError = require('pretty-error');
import { BasicTest } from '../testObject';
import { BasicReporter } from './basicReporter';

export class PrettyTestReporter extends BasicReporter {
    report(result: any) {
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