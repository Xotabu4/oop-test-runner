import { Condition } from "./condition";

export abstract class Before extends Condition {
    attach() {
        this.test.conditions.before.push(this)
    }
}