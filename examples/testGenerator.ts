import { Test } from "../lib/testObject";

/**
 * Just dummy test generator to test on huge test numbers
 */
let numb = 1000

let counter = 0
export let tests = []
while (counter < numb) {
    tests.push(new class extends Test {
        name = `Test number #${counter}`
        async test() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // reject(new Error('Error!'))
                    resolve()
                }, 10000)
            })
        }
    })
    counter++
}
