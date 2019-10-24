import { Test } from "../testObject";
import { Before, After } from "../conditions";
import * as PrettyError from 'pretty-error'
import { Reporter } from "./reporter";

// 'onStart',
// 'onTestStart',
// 'onTestEnd',
// // 'onTestFail', onTestEnd will receive error if any as third param
// 'onEnd']

export class BasicReporter extends Reporter {
    allTests = null

    onStart(tests: Test[]) {
        this.allTests = tests
        console.log(`---Total ${this.allTests.length} will be run`)
        console.time(`---Tests run took`)
    }

    onTestStart(test: Test, testIndx) {
        //console.log(`---Test ${test.name} ${test.id} started`)
        //console.time(`---Test ${test.name} ${test.id} finished`)
    }

    onTestEnd(test: Test, testIndx, result) {
        //console.timeEnd(`---Test ${test.name} ${test.id} finished`)
        if (!result) {
            //console.log(test.name, '|| is passed!')
        } else {
            var pe = new PrettyError();
            console.log(`${test.name} || is failed!`)
            console.log('RENDER', pe.render(result))
        }
    }

    onEnd(tests) {
        console.log(`---Total ${this.allTests.length} executed`)
        console.timeEnd(`---Tests run took`)
    }
}