import { BasicTest } from "../testObject";
import { Before, After } from "../conditions";

export class BasicReporter {
    attachTo(test: BasicTest) {
        class BeforeBasicLogger extends Before {
            apply() {
                console.log(`Test ${test.name} started`)
            }
        }

        class AfterBasicLogger extends After {
            apply() {
                console.log(`Test ${test.name} passed`)
            }
        }
        new BeforeBasicLogger(test).attach()
        new AfterBasicLogger(test).attach()

        return test
    }
}