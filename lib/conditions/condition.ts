import { Test } from "../testObject";


export abstract class Condition {
    constructor(protected test: Test) {

    }

    // Run condition preparation
    abstract apply()

    // Inject this condition to test pre/pass phase
    abstract attach()
}