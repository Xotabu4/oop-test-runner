import { BasicTest } from "../lib/testObject";

/**
 * Just dummy test generator to test on huge test numbers
 */
let numb = 5

let counter = 0
export let tests = []
while (counter < numb) {
    tests.push(new class extends BasicTest {
        name = `Test number #${counter}`
        async test() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error('Error!'))
                }, 10)
            })
        }
    })
    counter++
}
