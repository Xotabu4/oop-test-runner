import { BasicTest } from "../testObject";
import { Before, After } from "../conditions";

export class BasicLogger {
    attach(test: BasicTest) {
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