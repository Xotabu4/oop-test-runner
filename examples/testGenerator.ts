import { BasicTest } from "../lib/testObject";

/**
 * Just dummy test generator to test on huge test numbers
 */
let numb = 100

let counter = 0
export let tests = []
while (counter < numb) {
    tests.push(new class extends BasicTest {
        name = `Test number #${counter}`
        async test() { }
    })
    counter++
}
