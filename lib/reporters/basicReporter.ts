import { BasicTest } from "../testObject";
import { Before, After } from "../conditions";

export class BasicReporter {
    attachTo(test: BasicTest) {
        class BeforeBasicLogger extends Before {
            apply() {
                console.log(`---Test ${test.name} started`)
                console.time(`---Test ${test.name} finished`)
            }
        }

        class AfterBasicLogger extends After {
            apply() {
                console.timeEnd(`---Test ${test.name} finished`)
            }
        }
        new BeforeBasicLogger(test).attach()
        new AfterBasicLogger(test).attach()

        return test
    }
}