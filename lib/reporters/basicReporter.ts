import { BasicTest, Test } from "../testObject";
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

    onStart(tests: BasicTest[]) {
        this.allTests = tests
        console.log(`---Total ${this.allTests.length} will be run`)
        console.time(`---Tests run took`)
    }

    onTestStart(test: BasicTest, testIndx) {
        console.log(`---Test ${test.name} started`)
        console.time(`---Test ${test.name} finished`)
    }

    onTestEnd(test: BasicTest, testIndx, result) {
        console.timeEnd(`---Test ${test.name} finished`)
        if (!result) {
            console.log(test.name, '|| is passed!')
        } else {
            var pe = new PrettyError();
            console.log(`${test.name} || is failed!`)
            console.log(pe.render(result))
        }
    }

    onEnd(tests) {
        console.timeEnd(`---Tests run took`)
    }
}